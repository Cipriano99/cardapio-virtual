import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const P = styled.p`
  text-align: center;
  margin-top: 40px;
`;

const SocialMedia = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  margin: 8px auto;
  margin-bottom: 40px;
`;

const ButtonSocialMedia = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  font-size: 20px;

  display: grid;
  place-content: center;

  background-color: var(--bg-button);
  color: var(--text-button);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function Cipriano() {
  return (
    <>
      <P>
        Desenvolvido por <b>Samuel Cipriano</b>
      </P>

      <SocialMedia>
        <ButtonSocialMedia
          onClick={() => window.open('https://instagram.com/samuelcipriano99')}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </ButtonSocialMedia>

        <ButtonSocialMedia
          onClick={() =>
            window.open('https://api.whatsapp.com/send?phone=5589994392403')
          }
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </ButtonSocialMedia>
      </SocialMedia>
    </>
  );
}
