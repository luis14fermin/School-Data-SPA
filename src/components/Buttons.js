import '../css/Buttons.css';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

function Buttons({schoolData}) {

  const downloadFile = () => {
    const fileName = schoolData.school.name.toLowerCase().replaceAll(' ', '_');
    const json = JSON.stringify(schoolData);
    const blob = new Blob([json],{type:'application/json'});
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const downloadPDF = () => {
    html2canvas(document.body)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF()
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save(schoolData.school.name.toLowerCase().replaceAll(' ', '_') + '.pdf'); 
    });
  }

  return (
    <section id='buttons_section'>
        <button onClick={() => downloadPDF()}>Download PDF</button>
        <button onClick={() => downloadFile()}>Download JSON</button>
        <button onClick={() => window.print()}>Print Page</button>
    </section>
  );
}

export default Buttons;