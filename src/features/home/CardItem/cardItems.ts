import {
  ChatCircleDotsIcon,
  PenNibIcon,
  ReadCvLogoIcon,
  SquaresFourIcon,
} from '@phosphor-icons/react'
import { CardItem } from './CardItem'

export const cardItems: CardItem[] = [
  new CardItem(ReadCvLogoIcon, 'رزومه', 'دانلود رزومه‌ی من', null),
  new CardItem(ChatCircleDotsIcon, 'تماس', 'راه‌های ارتباطی با من', null),
  new CardItem(SquaresFourIcon, 'برنامک‌ها', 'پروژه‌های کاربردی و ابزارها', null),
  new CardItem(PenNibIcon, 'بلاگ', 'نوشته‌ها، آموزش‌ها، و مقالات', null),
]
