import styled from 'styled-components';
import Icon from '../UI/Icon';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <S.Sidebar>
      <S.Header>
        <S.Avatar>
          <img
            src='https://www.pngkey.com/png/full/3-37666_whatsapp-png-image-transparent-whatsapp-logo-png.png'
            alt='avatar'
          />
        </S.Avatar>
        <S.Options>
          <Icon type='donutlarge' />
          <Icon type='chat' />
          <Icon type='moreandroid' />
        </S.Options>
      </S.Header>
      <S.Search>
        <input type='text' placeholder='Search or start a new chat' />
        <Icon type='search' />
      </S.Search>
      <S.Chats>
        <h2 className='newChat'>Add new Chat</h2>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </S.Chats>
    </S.Sidebar>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Sidebar = styled.div`
  flex: 0.35;
  border-right: 1px solid lightgray;
`;

S.Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  padding: 20px;
  background-color: #e1e1e1;
`;

S.Avatar = styled.div`
  img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`;

S.Options = styled.div`
  min-width: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .anticon {
    color: #5e5e5e;
    font-size: 1.5em;
    cursor: pointer;
  }
`;

S.Search = styled.div`
  position: relative;
  margin: 1rem 0;
  padding: 0 1rem;

  input {
    width: 100%;
    border-radius: 1rem;
    padding: 1rem 0.5rem 1rem 3rem;
    outline: 0;
    border: 0;
  }

  .anticon {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    font-size: 1.2em;
    color: #5e5e5e;
  }
`;

S.Chats = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  .newChat {
    text-align: center;
    width: 100%;
  }

  .newChat,
  div {
    transition: all ease 0.2s;
    cursor: pointer;
    padding: 1rem 0;
  }

  > div:hover,
  .newChat:hover {
    background-color: #ebebeb;
  }
`;

export default Sidebar;
