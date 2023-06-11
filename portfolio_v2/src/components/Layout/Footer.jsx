import PDF from '../../Cv 2.7.2.pdf'

export default function Footer() {
    return (
      <footer>
        <div>
          <p>
            &#169; Jérémy Quint | 2022
          </p>
        </div>
        <a href={PDF} download="CV_Jérémy_Quint" rel="noreferrer" target="_blank">Consulter mon CV</a>
      </footer>
    );
  }