import { FC, useMemo } from 'react';
import { Avatar, AvatarProps, TableCell, TableRow } from '@mui/material';
import { EmployeesTableRowDisclosure } from '@pages/EmployeesPage/components/EmployeesTableRowDisclosure';
import { useSkeleton } from '@hooks/index';
import { IEmpoyeesTableRowProps } from '.';

const EmployeesTableRow: FC<IEmpoyeesTableRowProps> = ({ user, isLoading }) => {
  const avatarProps = useMemo(() => {
    if (!user) return;

    const props: AvatarProps = {};

    if (user.profile.avatar) props.src = user.profile.avatar;
    else if (user.profile.first_name) props.children = user.profile.first_name[0];
    else if (user.profile.last_name) props.children = user.profile.last_name[0];
    else props.children = user.email[0];

    return props;
  }, [user]);

  const tryShow = useSkeleton(isLoading);

  return (
    <TableRow>
      <TableCell>{tryShow(<Avatar {...avatarProps} />, 'circular')}</TableCell>
      <TableCell>{tryShow(user?.profile.first_name, 'text')}</TableCell>
      <TableCell>{tryShow(user?.profile.last_name, 'text')}</TableCell>
      <TableCell>{tryShow(user?.email, 'text')}</TableCell>
      <TableCell>{tryShow(user?.department_name, 'text')}</TableCell>
      <TableCell>{tryShow(user?.position_name, 'text')}</TableCell>
      {!isLoading && user && (
        <TableCell>
          <EmployeesTableRowDisclosure user={user} />
        </TableCell>
      )}
    </TableRow>
  );
};

export default EmployeesTableRow;
