import styled from 'styled-components';

function SidebarChat() {
  return (
    <S.SidebarChat>
      <S.Avatar>
        <img
          src='https://www.pngkey.com/png/full/3-37666_whatsapp-png-image-transparent-whatsapp-logo-png.png'
          alt='avatar'
        />
      </S.Avatar>
      <S.ChatInfo>
        <h2>Room name</h2>
        <p>This is the last message</p>
      </S.ChatInfo>
    </S.SidebarChat>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.SidebarChat = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 2rem !important;
  border-bottom: 1px solid lightgray;
  flex: 1;
`;

S.Avatar = styled.div`
  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`;

S.ChatInfo = styled.div`
  margin-left: 1rem;

  h2 {
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
  }
`;

export default SidebarChat;
