import BellIcon from '@/assets/icons/bell.svg';
import CatFeetIcon from '@/assets/icons/cat-feet.svg';
import HomeIcon from '@/assets/icons/home.svg';
import MessageIcon from '@/assets/icons/message.svg';
import MusicFilterIcon from '@/assets/icons/music-filter.svg';
import SpotifyIcon from '@/assets/icons/spotify.svg';
import UsersIcon from '@/assets/icons/users.svg';
import YoutubeIcon from '@/assets/icons/youtube.svg';

export const LEFT_NAVIGATION = [
  {
    id: 1,
    name: {
      vi: 'Trang chủ',
      en: 'Home',
      id: 'Beranda',
      th: 'หน้าแรก',
      ko: '홈',
      'zh-TW': '首頁'
    },
    path: '/',
    icon: HomeIcon
  },
  {
    id: 2,
    name: {
      vi: 'Bảng tin',
      en: 'Feed',
      id: 'Umpan',
      th: 'ฟีด',
      ko: '피드',
      'zh-TW': '動態'
    },
    path: '/feed',
    icon: CatFeetIcon
  },
  {
    id: 3,
    name: {
      vi: 'Youtube',
      en: 'Youtube',
      id: 'Youtube',
      th: 'Youtube',
      ko: 'Youtube',
      'zh-TW': 'Youtube'
    },
    path: '/youtube',
    icon: YoutubeIcon
  },
  {
    id: 4,
    name: {
      vi: 'Thành viên',
      en: 'Members',
      id: 'Anggota',
      th: 'สมาชิก',
      ko: '멤버',
      'zh-TW': '成員'
    },
    path: '/members',
    icon: UsersIcon
  },
  {
    id: 5,
    name: {
      vi: 'Đĩa nhạc',
      en: 'Discography',
      id: 'Diskografi',
      th: 'ผลงานเพลง',
      ko: '디스코그래피',
      'zh-TW': '音樂作品'
    },
    path: '/discography',
    icon: MusicFilterIcon
  }
];

export const RIGHT_NAVIGATION = [
  {
    id: 1,
    name: {
      vi: 'Thông báo',
      en: 'Notifications',
      id: 'Pemberitahuan',
      th: 'การแจ้งเตือน',
      ko: '알림',
      'zh-TW': '通知'
    },
    path: '',
    icon: BellIcon
  },
  {
    id: 2,
    name: {
      vi: 'Mixxtify',
      en: 'Mixxtify',
      id: 'Mixxtify',
      th: 'Mixxtify',
      ko: 'Mixxtify',
      'zh-TW': 'Mixxtify'
    },
    path: '/mixxtify',
    icon: SpotifyIcon
  },
  {
    id: 3,
    name: {
      vi: 'Tin nhắn',
      en: 'Messages',
      id: 'Pesan',
      th: 'ข้อความ',
      ko: '메시지',
      'zh-TW': '訊息'
    },
    path: '/bubble',
    icon: MessageIcon
  }
];
