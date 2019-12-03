import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 16px;
  max-width: 1300px;
  margin: 0 auto;

  .logo {
    color: var(--black);
    font-weight: 900;
    font-size: 20px;
  }

  .user {
    display: flex;
    align-items: center;
    font-size: 14px;
    background-color: var(--green);
    color: #fff;
    padding: 8px 16px 8px 8px;
    border-radius: 24px;

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }
  }
`
