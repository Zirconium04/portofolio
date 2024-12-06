import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';


export default function Page() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <Image
            src="/moi.jpg"
            alt="Thomas Mouton"
            width={48}
            height={48}
            className="rounded-full"
          />
        <h1 className="text-2xl font-semibold tracking-tighter ml-4">
          Thomas Mouton
        </h1>
      </div>
      <p className="mt-8">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
    </section>
  )
}
