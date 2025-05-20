import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import UserIcon from '@/assets/icons/user.svg';

const UserAvatar = () => {
  const user = {
    name: 'example'
  };

  return (
    <div>
      {user ? (
        <Link href='/my' className='ml-2 block'>
          <Avatar className='size-9'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>
              <Image
                width={40}
                height={40}
                alt='avatar'
                src='https://ik.imagekit.io/purm5sqa4/mixxtopia/static/placeholders/avatar_placeholder.png?updatedAt=1747191099278'
              />
            </AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <Link href='/my-page'>
          <UserIcon className='size-6' />
        </Link>
      )}
    </div>
  );
};

export default UserAvatar;
