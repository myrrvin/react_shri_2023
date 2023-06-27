import Accordion from '@/components/Accordion/Accordion'
import {FunctionComponent} from 'react'

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
	return (
		<div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
			<h1
				style={{padding: '24px', backgroundColor: '#fff', borderRadius: '8px'}}>
				Вопросы-ответы
			</h1>

			<Accordion question='Что такое Билетопоиск?'>
				<p>
					Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
					фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
					видео и интересные факты, поставить фильмам оценки, написать рецензии
					и дополнить описание фильмов.
				</p>
			</Accordion>
			<Accordion question='Какой компании принадлежит Билетопоиск?'>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quae
					unde eligendi corporis voluptatem hic sunt nesciunt consequatur libero
					cum tenetur, facere cupiditate voluptatibus soluta esse molestiae
					consectetur quasi? Neque!
				</p>
			</Accordion>
			<Accordion question='Как купить билет на Билетопоиск?'>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quae
					unde eligendi corporis voluptatem hic sunt nesciunt consequatur libero
					cum tenetur, facere cupiditate voluptatibus soluta esse molestiae
					consectetur quasi? Neque!
				</p>
			</Accordion>
			<Accordion question='Как оставить отзыв на Билетопоиск?'>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quae
					unde eligendi corporis voluptatem hic sunt nesciunt consequatur libero
					cum tenetur, facere cupiditate voluptatibus soluta esse molestiae
					consectetur quasi? Neque!
				</p>
			</Accordion>
		</div>
	)
}

export default Page
