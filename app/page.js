/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "./Components/Container";
import EmptyState from "./Components/EmptyState";
import ListingCard from "./Components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUsers";
import getListings from "./actions/getListing";

const Home = async({searchParams}) => {
  const params = await searchParams;
  const listings = await getListings(params);
  const currentUser = await getCurrentUser();

  // const isEmpty = true;

  if(listings.length === 0){
    return(
      <EmptyState showReset/>
    )
  }
  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
         {listings.map((listing) => {
          return (
            <ListingCard key={listing.id} data={listing} currentUser={currentUser} />
          )
         })}
      </div>
    </Container>
  );
}
export default Home;
