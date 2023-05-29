import Person from "./person";
const List = ({ people }) => {
  //   console.log(person);

  return (
    <section>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </section>
  );
};

export default List;
