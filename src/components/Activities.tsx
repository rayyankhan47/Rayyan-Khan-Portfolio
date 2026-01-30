import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Activity {
  role: string;
  affiliation: string;
  dates: string;
}

const activities: Activity[] = [
  {
    role: "Campus Associate",
    affiliation: "Anthropic, Claude Builder Club @ McGill University",
    dates: "Jan 2026 – Present",
  },
  {
    role: "Director of Prayer",
    affiliation: "Muslim Student Association of McGill University",
    dates: "Sept 2025 – Present",
  },
  {
    role: "President",
    affiliation: "Best Buddies Canada, Dawson College Branch",
    dates: "Aug 2023 – May 2024",
  },
  {
    role: "Volunteer Tutor (Math, Physics, Chemistry)",
    affiliation: "Dawson College",
    dates: "Dec 2023 – May 2024",
  },
  {
    role: "Vice-President (Formerly Secretary, Social Media Manager)",
    affiliation: "Muslim Student Association of Dawson College",
    dates: "Sep 2022 – Jan 2024",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="content-container py-8">
      <h2 className="section-title">Activities</h2>

      <div className="border border-border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="font-mono text-xs font-medium text-foreground">
                Role
              </TableHead>
              <TableHead className="font-mono text-xs font-medium text-foreground">
                Affiliation
              </TableHead>
              <TableHead className="font-mono text-xs font-medium text-foreground text-right">
                Dates of Service
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow key={index}>
                <TableCell className="text-sm text-foreground">
                  {activity.role}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {activity.affiliation}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground text-right whitespace-nowrap">
                  {activity.dates}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Activities;
