import Pagination from "./Pagination";
import Search from "./Search";
import TableComponent from "./TableComponent";

export default function UserContainer() {
    return (
        <section class="card users-container">
        <Search />
  
      <TableComponent />
       
        <button class="btn-add btn">Add new user</button>
  
      <Pagination />
      </section>
    );
}