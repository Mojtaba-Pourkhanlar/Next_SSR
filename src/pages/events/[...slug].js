import React from 'react'

const FilteredUser = ({user}) => {

  console.log(user)
  
  return (
    <div>FilteredUser</div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  
  return {
    props: {user}
  };
}

export default FilteredUser