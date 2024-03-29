import {
  blockquote,
  h1,
  h2,
  h3,
  h4,
  lead,
  list,
  p,
} from "@/components/Typography"

export default function DemoTypography() {
  return (
    <div className="p-3">
      <h1 className={h1}>The Joke Tax Chronicles</h1>
      <p className={lead}>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <h2 className={h2}>The King's Plan</h2>
      <p className={p}>
        The king thought long and hard, and finally came up with a brilliant
        plan : he would tax the jokes in the kingdom.
      </p>
      <blockquote className={blockquote}>
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </blockquote>
      <h3 className={h3}>The Joke Tax</h3>
      <p className={p}>
        The king's subjects were not amused. They grumbled and complained, but
        the king was firm:
      </p>
      <ul className={list}>
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <p className={p}>
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king's
        foolishness get him down: a court jester named Jokester.
      </p>
      <h3 className={h3}>Jokester's Revolt</h3>
      <p className={p}>
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester.
      </p>
      <p className={p}>
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
      </p>
      <h4 className={h4}> The People's Rebellion</h4>
      <p className={p}>
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </p>
      <p className={p}>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </p>
      <p className={p}>
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </p>
    </div>
  )
}
