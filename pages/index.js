import Dashboard from '../src/components/Dashboard/Dashboard';
import { SidebarState } from '../src/components/Contexts/GlobalContexts';

export default function Home() {
  return (
    <SidebarState>
      <Dashboard></Dashboard>;
    </SidebarState>
  );
}
