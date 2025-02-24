
import React from 'react';

export function MakerForm() {
  const mockData = [
    { id: 'BATCH-0001', appCode: 'MSTRINT', matrixType: 'MSTRINT', uploadedBy: '123', uploadedDate: '2025-02-04T11:20:52', approvalStatus: 'Approved', makerComments: 'Test', checkerComments: '' },
    { id: 'BATCH-0002', appCode: 'SPL', matrixType: 'CPB', uploadedBy: '123', uploadedDate: '2025-02-04T12:38:18', approvalStatus: 'Approved', makerComments: '', checkerComments: '' },
    { id: 'BATCH-0003', appCode: 'PIB', matrixType: 'CPB', uploadedBy: '123', uploadedDate: '2025-02-04T12:41:39', approvalStatus: 'Approved', makerComments: '', checkerComments: '' },
    { id: 'BATCH-0004', appCode: 'WSM', matrixType: 'CPB', uploadedBy: '345', uploadedDate: '2025-02-04T12:42:46', approvalStatus: 'Approved', makerComments: 'Test', checkerComments: '' },
    { id: 'BATCH-0005', appCode: 'WSM', matrixType: 'DINT', uploadedBy: 's456', uploadedDate: '2025-02-04T12:43:02', approvalStatus: 'Approved', makerComments: 'test', checkerComments: '' },
  ];

  return (
    <div className="maker-container">
      <button className="logout-button">Logout</button>
      <h1 className="maker-title">Maker Screen</h1>
      
      <div className="form-group">
        <label>User ID:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>App Code:</label>
        <select className="select-control" defaultValue="SPL">
          <option value="SPL">SPL</option>
          <option value="APP1">APP1</option>
          <option value="APP2">APP2</option>
        </select>
      </div>

      <div className="form-group">
        <label>Matrix:</label>
        <select className="select-control">
          <option value="">Select an Matrix type</option>
          <option value="matrix1">Matrix 1</option>
          <option value="matrix2">Matrix 2</option>
          <option value="matrix3">Matrix 3</option>
        </select>
      </div>

      <div className="form-group">
        <label>Maker Comments:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Upload Excel File:</label>
        <div className="file-upload">
          <input type="file" accept=".xlsx,.xls" />
          <span>No file chosen</span>
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-primary">Upload</button>
        <button className="btn btn-primary">Download</button>
        <button className="btn btn-primary">Test</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Batch Id</th>
            <th>App Code</th>
            <th>Matrix Type</th>
            <th>Uploaded By</th>
            <th>Uploaded Date</th>
            <th>Approval Status</th>
            <th>Maker Comments</th>
            <th>Checker Comments</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row) => (
            <tr key={row.id}>
              <td><input type="checkbox" /></td>
              <td>{row.id}</td>
              <td>{row.appCode}</td>
              <td>{row.matrixType}</td>
              <td>{row.uploadedBy}</td>
              <td>{row.uploadedDate}</td>
              <td>{row.approvalStatus}</td>
              <td>{row.makerComments}</td>
              <td>{row.checkerComments}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-actions">
        <button className="btn btn-primary">Download</button>
        <button className="btn btn-primary">ViewRecords</button>
      </div>
    </div>
  );
}
