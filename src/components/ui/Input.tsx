export interface Props {
  placeholder?: string;
}

export default function Input($p: Props) {
  return (
    <div className={"border border-black p-3"}>
      <input
        className={"outline-none"}
        placeholder={$p.placeholder}
      />
    </div>
  );
}