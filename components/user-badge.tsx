type Props = {
  name?: string;
};

export default function UserBadge({ name }: Props) {
  const info = name ? ` as ${name}` : "";

  return <span className="text-xs">Logged in{info}</span>;
}
