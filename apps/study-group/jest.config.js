module.exports = {
  name: 'study-group',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/study-group',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
