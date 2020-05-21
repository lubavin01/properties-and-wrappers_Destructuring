export default function destructuring({ special }) {
  console.log(special);
  return special.map((
    {
      id, name, icon, description = 'Описание недоступно',
    },
  ) => ({
    id, name, icon, description,
  }
  ));
}
