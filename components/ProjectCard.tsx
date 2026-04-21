import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  slug: string;
  client: string;
  location: string;
  completionDate: string;
  scale: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          
          {/* Overlay info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{project.location}</span>
              <span>•</span>
              <span>{project.completionDate}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-slate-500 text-xs">Khách hàng</span>
              <p className="text-slate-900 text-sm font-medium">{project.client}</p>
            </div>
            <div>
              <span className="text-slate-500 text-xs">Quy mô</span>
              <p className="text-slate-900 text-sm font-medium">{project.scale}</p>
            </div>
          </div>
          <div className="flex items-center text-amber-600 text-sm font-medium">
            Xem case study
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
