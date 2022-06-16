const { google } = require('googleapis');

const uploadFile = async (fileObject) => {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  const { data } = await google.drive({ version: 'v3' }).files.create({
    media: {
      mimeType: fileObject.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name: fileObject.originalname,
      parents: ['1T3igFcwDSeTUHOUM76KvNMO6IU-EIJvR'],
    },
    fields: 'id,name',
  });
  console.log(`Uploaded file ${data.name} ${data.id}`);
};


module.exports = {
    uploadFile
    }
