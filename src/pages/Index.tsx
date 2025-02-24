
import { useState } from 'react';
import '../App.css';

function Index() {
  const [activePage, setActivePage] = useState('maker');

  return (
    <div className="app-layout">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-menu">
            <button 
              className={`sidebar-button ${activePage === 'maker' ? 'active' : ''}`}
              onClick={() => setActivePage('maker')}
            >
              Maker
            </button>
            <button 
              className={`sidebar-button ${activePage === 'checker' ? 'active' : ''}`}
              onClick={() => setActivePage('checker')}
            >
              Checker
            </button>
          </div>
          <button className="sidebar-logout">Logout</button>
        </div>
      </div>

      <div className="main-content">
        <div className="maker-container">
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
            <tbody id="tableBody">
            </tbody>
          </table>

          <div className="table-actions">
            <button className="btn btn-primary">Download</button>
            <button className="btn btn-primary">ViewRecords</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
