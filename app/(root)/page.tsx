import BookList from "@/components/ui/BookList";
import BookOVerview from "@/components/ui/BookOVerview";
import { sampleBooks } from "@/constants";
import React from "react";

const Home = () => {
	return (
		<>
			<BookOVerview {...sampleBooks[0]} />
			<BookList
				title="Latest Books"
				books={sampleBooks}
				containerClassName="mt-28"
			/>
		</>
	);
};

export default Home;
