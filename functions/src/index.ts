import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

interface Sample {
  type: string;
  date: string;
  value: string;
  unit: string;
}

interface SampleDocumentData extends Pick<Sample, 'type' | 'value' | 'unit'> {
  date: FirebaseFirestore.Timestamp;
}

interface Body {
  data: Sample[];
}

admin.initializeApp();

const db = admin.firestore();

/**
 * @function
 * @param {functions.https.Request} request
 * @param {functions.Response<any>} response
 * @returns {void}
 */
export const appleHealth = functions
  .region('europe-west1')
  .https.onRequest(async (request, response) => {
    const { data }: Body = request.body;
    console.log(JSON.stringify(data));
    const batch = db.batch();
    const collection = db.collection('apple-health');

    data.forEach(sample => {
      const sampleDocumentData = createSampleDocumentData(sample);
      batch.set(collection.doc(), sampleDocumentData, {});
      console.log(JSON.stringify(sample));
    });

    await batch.commit();
    response.send('ok');
  });

/**
 * @param {Sample} sample
 * @returns {SampleDocumentData}
 */
function createSampleDocumentData(sample: Sample): SampleDocumentData {
  return {
    ...sample,
    date: admin.firestore.Timestamp.fromDate(new Date(sample.date)),
  };
}
