import ChatAreaWrapper from "@/components/ClientArea/ChatAreaWrapper";

function LoginWrapper({ children }) {
  return <div>{children}</div>;
}

export default function Main() {
  return (
    <header>
      <LoginWrapper>
        <ChatAreaWrapper />
      </LoginWrapper>
    </header>
  );
}
