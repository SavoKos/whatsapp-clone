import styled from 'styled-components';
import { S } from '../styledComponents';
import Icon from '../UI/Icon';

function Chat() {
  const date = new Date().toUTCString();

  return (
    <S.Chat>
      <S.Header>
        <S.LeftSide>
          <S.Avatar>
            <img
              src='https://www.pngkey.com/png/full/3-37666_whatsapp-png-image-transparent-whatsapp-logo-png.png'
              alt='avatar'
            />
          </S.Avatar>
          <S.RoomInfo>
            <h2>Dance Room</h2>
            <p>last seen {date}</p>
          </S.RoomInfo>
        </S.LeftSide>
        <S.Options>
          <Icon type='search' />
          <Icon type='attachfile' />
          <Icon type='moreandroid' />
        </S.Options>
      </S.Header>
      <S.Body>
        <S.Message>
          <span className='name'>Savo</span>
          This is a message
          <span className='date'>{date}</span>
        </S.Message>
        <S.Message className='sent'>
          <span className='name'>Savo</span>
          This is a message
          <span className='date'>{date}</span>
        </S.Message>
        <S.Message className='sent'>
          <span className='name'>Savo</span>
          This is a message
          <span className='date'>{date}</span>
        </S.Message>
      </S.Body>
      <S.SendMessage>
        <Icon type='emoji' />
        <form>
          <input type='text' placeholder='Type a message' />
          <button>Send message</button>
        </form>
        <Icon type='mic' />
      </S.SendMessage>
    </S.Chat>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
S.Chat = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
`;

S.RoomInfo = styled.div`
  margin-left: 2rem;
  flex: 1;
`;

S.LeftSide = styled.div`
  display: flex;
  align-items: center;
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

S.Body = styled.div`
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  flex: 1;
  overflow-y: auto;
  padding: 0 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
`;

S.Message = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 1rem;
  width: fit-content;
  padding: 1rem;
  margin-top: 2rem;

  &.sent {
    align-self: flex-end;
    background-color: #dcf8c6;
  }

  span {
    font-weight: 600;
  }

  .name {
    position: absolute;
    top: -1.5rem;
  }

  .date {
    font-size: 0.6em;
    margin-left: 0.6rem;
  }
`;

S.SendMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  button {
    display: none;
  }

  .anticon {
    color: #5e5e5e;
    font-size: 1.5em;
  }

  form {
    flex: 1;
  }

  input {
    width: -webkit-fill-available;
    margin: 0 1rem;
    border-radius: 1rem;
    padding: 1rem;
    outline: 0;
    border: 0;
  }
`;

export default Chat;
