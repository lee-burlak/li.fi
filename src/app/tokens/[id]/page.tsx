export default function Token({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
