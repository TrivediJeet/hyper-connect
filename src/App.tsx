import UserCard from "./components/UserCard";
import useCachedUsers from "./hooks/useCachedUsers";
import { VirtuosoGrid } from "react-virtuoso";

function App() {
  const { users, isLoading } = useCachedUsers();

  return (
    <div className="bg-slate-300 h-screen flex flex-col">
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      ) : (
        <VirtuosoGrid
          data={users}
          listClassName="flex items-center justify-center flex-wrap gap-12 !mt-12"
          itemContent={(_, user) => <UserCard user={user} />}
        />
      )}
    </div>
  );
}

export default App;
