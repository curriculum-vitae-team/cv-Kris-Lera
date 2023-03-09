import { FC } from 'react';
import { TableCell, TableRow } from '@mui/material';
import { formatDate } from '@pages/ProjectsPage/utils';
import { useSkeleton } from '@hooks/index';
import { ProjectsTableRowActions } from '@pages/ProjectsPage/components/ProjectsTableRowActions';
import { IProjectsTableRowProps } from '.';

const ProjectsTableRow: FC<IProjectsTableRowProps> = ({ project, isLoading }) => {
  const tryShow = useSkeleton(isLoading);

  return (
    <TableRow>
      <TableCell>{tryShow(project?.name, 'text')}</TableCell>
      <TableCell>{tryShow(project?.internal_name, 'text')}</TableCell>
      <TableCell>{tryShow(project?.domain, 'text')}</TableCell>
      <TableCell>{tryShow(project?.start_date, 'text')}</TableCell>
      <TableCell>
        {tryShow(
          project?.end_date === formatDate() ? 'Till now' : '' + (project?.end_date ?? ''),
          'text'
        )}
      </TableCell>
      <TableCell>
        {!isLoading && project && <ProjectsTableRowActions project={project} />}
      </TableCell>
    </TableRow>
  );
};

export default ProjectsTableRow;
