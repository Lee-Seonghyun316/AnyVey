import ReactModal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content: {
    width: '281px',
    height: '213px',
    top: '53%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
  overlay: {
    background: 'rgba(43, 43, 43, 0.4)',
  },
};

ReactModal.setAppElement('#root');

type Props = {
  isOpen: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  onClose: () => void;
  onConfirm: () => void;
};

const SubmitModal = ({ isOpen, children, onClose, onConfirm }: Props) => (
  <ReactModal
    isOpen={isOpen}
    style={customStyles}
    contentLabel="Example Modal"
    preventScroll={true}
    onRequestClose={() => {
      onClose();
    }}
    shouldCloseOnOverlayClick={true}
  >
    <Wrapper>
      <Content>{children}</Content>
      <form>
        <SubmitButton
          active={false}
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          아니요
        </SubmitButton>
        <SubmitButton
          active
          onClick={(e) => {
            e.preventDefault();
            onConfirm();
          }}
        >
          네
        </SubmitButton>
      </form>
    </Wrapper>
  </ReactModal>
);

export default SubmitModal;

const BUTTON_HEIGHT = 59;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Content = styled.div`
  flex-grow: 1;
  display: flex;
  white-space: pre-wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.8;
  ${({ theme }) => theme.typography.medium};
`;

type ButtonProps = {
  active: boolean;
};
const SubmitButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: ${BUTTON_HEIGHT}px;
  color: ${({ theme, active }) => (active ? theme.colors.orange : '#818181')};
  ${({ theme }) => theme.typography.semiBold};
  border-top: 1px solid #f1f1f1;
  & + & {
    border-left: 1px solid #f1f1f1;
  }
`;
