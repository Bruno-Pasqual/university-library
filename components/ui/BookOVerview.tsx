import Image from "next/image";
import React from "react";
import { Button } from "./button";
import BookCover from "./BookCover";

const BookOVerview = ({
	title,
	author,
	genre,
	rating,
	totalCopies,
	availableCopies,
	description,
	coverColor: color,
	coverUrl,
}: Book) => {
	console.log(coverUrl);

	return (
		<section className="book-overview">
			<div className="flex flex-1 flex-col gap-5">
				<h1>{title}</h1>
				<div className="book-info">
					<p>
						Author: <span className="font-semibold text-light-200">{author}</span>
					</p>
					<p>
						Category: <span className="font-semibold text-light-200">{genre}</span>
					</p>

					<div className="flex flex-row gap-1">
						<Image src="/icons/star.svg" alt="star" width={22} height={22} />
						<p>{rating}</p>
					</div>

					<div className="book-copies">
						<p>
							Total books: <span>{totalCopies}</span>
						</p>
						<p>
							Avaliable Books: <span>{availableCopies}</span>
						</p>
					</div>
					<p className="book-description">{description}</p>

					<Button className="book-overview_btn">
						<Image
							src="/icons/book.svg"
							alt="book"
							width={20}
							height={20}
							className=""
						/>
						<p className="font-bebas-neue text-xl text-dark-100">Borrow Book</p>
					</Button>

					<div className="relative flex flex-1 justify-center">
						<div className="relative border">
							<BookCover
								variant="wide"
								className="z-10"
								coverColor={color}
								coverUrl={coverUrl}
							/>
							<div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
								<BookCover variant="wide" coverColor={color} coverUrl={coverUrl} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookOVerview;
