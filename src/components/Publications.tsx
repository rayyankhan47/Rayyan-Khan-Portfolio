import { FileText, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  pdfLink?: string;
}

const publications: Publication[] = [
  {
    title: "Scaling Laws for Neural Language Models",
    authors: "Your Name, Collaborator A, Collaborator B",
    venue: "International Conference on Machine Learning (ICML)",
    year: "2024",
    link: "#",
    pdfLink: "#",
  },
  {
    title: "Efficient Attention Mechanisms for Long Sequences",
    authors: "Collaborator A, Your Name, Collaborator C",
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: "2023",
    link: "#",
    pdfLink: "#",
  },
  {
    title: "On the Generalization of Transformer Models",
    authors: "Your Name, Collaborator B",
    venue: "Association for Computational Linguistics (ACL)",
    year: "2023",
    link: "#",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="content-container py-8">
      <h2 className="section-title">Publications</h2>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="group">
            <h3 className="font-sans text-base font-medium text-foreground leading-snug">
              {pub.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs font-mono text-muted-foreground">
                {pub.venue}, {pub.year}
              </span>
              <div className="flex items-center gap-2">
                {pub.link && (
                  <a
                    href={pub.link}
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Paper
                  </a>
                )}
                {pub.pdfLink && (
                  <a
                    href={pub.pdfLink}
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3" />
                    PDF
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
