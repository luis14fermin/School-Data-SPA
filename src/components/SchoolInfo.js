import '../css/SchoolInfo.css';

function SchoolInfo({school_url, city, state, zip, students_total}) {

  return (
    <section id='school_info'>
        <div>
            <h2>Website</h2>
            <a 
            href={`https://${school_url}`} 
            target="_blank" 
            rel="noreferrer"
            >
              {school_url}
            </a>
        </div>
        <div>
            <h2>Address</h2>
            <span>{city}, {state} {zip}</span>
        </div>
        <div>
            <h2>Number of Students</h2>
            <span>{students_total}</span>
        </div>
    </section>
  );
}

export default SchoolInfo;