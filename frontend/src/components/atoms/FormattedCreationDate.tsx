type Props = {
  date: string;
};

export const FormattedCreationDate = ({ date }: Props) => {
  return <p style={{ fontSize: 12, color: 'gray' }}>Created: {new Date(date).toLocaleString()}</p>;
};
