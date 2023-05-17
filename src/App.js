import React, {useState}  from 'react';
import TarotBox from './containers/TarotBox';

import theFool from './images/m00.jpg'
import theMagician from './images/m01.jpg'
import theHighPriestess from './images/m02.jpg'
import theEmpress from './images/m03.jpg'
import theEmperor from './images/m04.jpg'
import theHierophant from './images/m05.jpg'
import theLovers from './images/m06.jpg'
import theChariot from './images/m07.jpg'
import strength from './images/m08.jpg'
import theHermit from './images/m09.jpg'
import wheelOfFortune from './images/m10.jpg'
import justice from './images/m11.jpg'
import theHangedMan from './images/m12.jpg'
import death from './images/m13.jpg'
import temperance from './images/m14.jpg'
import theDevil from './images/m15.jpg'
import theTower from './images/m16.jpg'
import theStar from './images/m17.jpg'
import theMoon from './images/m18.jpg'
import theSun from './images/m19.jpg'
import judgement from './images/m20.jpg'
import theWorld from './images/m21.jpg'

import './App.css';

function App() {

  const [pastCard, setPastCard] = useState(null)
  const [presentCard, setPresentCard] = useState(null)
  const [futureCard, setFutureCard] = useState(null)
  const [cards, setCards] = useState([
    {
        "name": "The Fool",
        "number": "0",
        "img": theFool,
        "fortune_telling": [
                "Watch for new projects and new beginnings", 
                "Prepare to take something on faith", 
                "Something new comes your way; go for it"
            ], 
            "keywords": [
                "freedom", 
                "faith", 
                "inexperience", 
                "innocence"
            ], 
            "meanings": {
                "light": [
                    "Freeing yourself from limitation", 
                    "Expressing joy and youthful vigor", 
                    "Being open-minded", 
                    "Taking a leap of faith", 
                    "Attuning yourself to your instincts", 
                    "Being eager or curious", 
                    "Exploring your potential", 
                    "Embracing innovation and change"
                ], 
                "shadow": [
                    "Being gullible and naive", 
                    "Taking unnecessary risks", 
                    "Failing to be serious when required", 
                    "Being silly or distracted", 
                    "Lacking experience", 
                    "Failing to honor well-established traditions and limits", 
                    "Behaving inappropriately"
                ]
            },
        "Questions to Ask" : ["What would I do if I felt free to take a leap?","How willing am I to be vulnerable and open?","How might past experiences help in this new situation?"]       	
    },
    {
    "name": "The Magician",
    "number": "1",
    "img": theMagician,
    "fortune_telling": [
                "A powerful man may play a role in your day", 
                "Your current situation must be seen as one element of a much larger plan"
            ], 
            "keywords": [
                "capability", 
                "empowerment", 
                "activity"
            ], 
            "meanings": {
                "light": [
                    "Taking appropriate action", 
                    "Receiving guidance from a higher power", 
                    "Becoming a channel of divine will", 
                    "Expressing masculine energy in appropriate and constructive ways", 
                    "Being yourself in every way"
                ], 
                "shadow": [
                    "Inflating your own ego", 
                    "Abusing talents", 
                    "Manipulating or deceiving others", 
                    "Being too aggressive", 
                    "Using cheap illusions to dazzle others", 
                    "Refusing to invest the time and effort needed to master your craft", 
                    "Taking shortcuts"
                ]
            },
        "Questions to Ask" : ["What am I empowered to do?","How might my abilities come into play?","To what extent am I making the most of my talents?"]
    },
    {
    "name": "The High Priestess",
    "number": "2",
    "img": theHighPriestess,
    "fortune_telling": [
                "A mysterious woman arrives", 
                "A sexual secret may surface", 
                "Someone knows more than he or she will reveal"
            ], 
            "keywords": [
                "intuition", 
                "reflection", 
                "purity", 
                "initiation"
            ], 
            "meanings": {
                "light": [
                    "Listening to your feelings and intuitions", 
                    "Exploring unconventional spirituality", 
                    "Keeping secrets", 
                    "Being receptive", 
                    "Reflecting instead of acting", 
                    "Observing others", 
                    "Preserving purity"
                ], 
                "shadow": [
                    "Being aloof", 
                    "Obsessing on secrets and conspiracies", 
                    "Rejecting guidance from spirit or intuition", 
                    "Revealing all", 
                    "Ignoring gut feelings", 
                    "Refusing to become involved, even when involvement is appropriate"
                ]
            },
    "Questions to Ask" : ["What might a rebel against tradition do?","What isn't being said or revealed?","What could be achieved by observing and reflecting?"]
    },
    {
    "name": "The Empress",
    "number": "3",
    "img": theEmpress,
    "fortune_telling": [
                "Pregnancy is in the cards", 
                "An opportunity to be involved in luxurious sexuality is coming", 
                "Beware a tendency toward addiction"
            ], 
            "keywords": [
                "fertility", 
                "productivity", 
                "ripeness", 
                "nurturing"
            ], 
            "meanings": {
                "light": [
                    "Nurturing yourself and others", 
                    "Bearing fruit", 
                    "Celebrating your body", 
                    "Bearing (literal or figurative) children", 
                    "Reveling in luxury", 
                    "Mothering those around you in positive ways", 
                    "Enjoying your sexuality", 
                    "Getting things done"
                ], 
                "shadow": [
                    "Overindulging", 
                    "Being greedy", 
                    "Smothering someone with attention", 
                    "Debilitating someone by being overprotective", 
                    "Inhibiting productivity by obsessing on productivity", 
                    "Being overcome by addictive behavior"
                ]
            },
    "Questions to Ask" : ["What would a concerned and capable mother do?","What can I do that would emphasize growth?","How can I celebrate my own sensuality and sexuality?"]
    },
    {
    "name": "The Emperor",
    "number": "4",
    "img": theEmperor,
    "fortune_telling": [
                "A father figure arrives", 
                "A new employer or authority figure will give you orders", 
                "Expect discipline or correction in the near future"
            ], 
            "keywords": [
                "authority", 
                "regulation", 
                "direction", 
                "structure"
            ], 
            "meanings": {
                "light": [
                    "Exercising authority", 
                    "Defining limits", 
                    "Directing the flow of work", 
                    "Communicating clear guidelines", 
                    "Being in control of yourself and others", 
                    "Tempering aggressive masculinity with wisdom and experience"
                ], 
                "shadow": [
                    "Micromanaging", 
                    "Crushing the creativity of others with a rigid, iron-fisted approach", 
                    "Insisting on getting your own way", 
                    "Assuming a dictatorial mindset", 
                    "Using overt force to achieve your goals and maintain order"
                ]
            },
    "Questions to Ask" : ["How does the issue of control or regulation impact this situation?","What would a compassionate but strict father do?","What needs more control?"]
    },
    {
    "name": "The Hierophant",
    "number": "5",
    "img": theHierophant,
    "fortune_telling": [
                "Expect to be caught in a misdeed and punished accordingly", 
                "Pray for forgiveness and confess wrongdoings", 
                "A more experienced man, spiritual leader, or father figure will come into your life"
            ], 
            "keywords": [
                "guidance", 
                "knowledge", 
                "revelation", 
                "belief"
            ], 
            "meanings": {
                "light": [
                    "Teaching or guiding others", 
                    "Searching for the truth", 
                    "Asking for guidance from a higher power", 
                    "Acknowledging the wisdom and experience of others", 
                    "Taking vows", 
                    "Engaging in heartfelt rituals", 
                    "Volunteering"
                ], 
                "shadow": [
                    "Using experience as a means of manipulating or misguiding others", 
                    "Being dogmatic", 
                    "Favoring tradition over what is expedient or necessary", 
                    "Going through the motions of empty rituals", 
                    "Concealing wisdom", 
                    "Restricting access to spiritual truths or the gods"
                ]
            },
    "Questions to Ask" : ["What role might tradition or religion play in this situation?","Who authored the rules? Who enforces them? Why?","How might an experienced guide impact this situation?"]
    },
    {
    "name": "The Lovers",
    "number": "6",
    "img": theLovers,
    "fortune_telling": [
                "A new personal or professional relationship blossoms", 
                "Sexual opportunities abound", 
                "Unexpectedly, a friend becomes a lover"
            ], 
            "keywords": [
                "love", 
                "passion", 
                "unity", 
                "choice"
            ], 
            "meanings": {
                "light": [
                    "Being in love", 
                    "Showing your love to others", 
                    "Expressing passion or romantic feelings", 
                    "Aligning yourself with groups or like-minded others", 
                    "Bringing people together", 
                    "Making well-informed decisions"
                ], 
                "shadow": [
                    "Debilitating passion", 
                    "Allowing an unhealthy desire for love to motivate destructive behavior", 
                    "Disrupting unity", 
                    "Working against the best interests of those who care about you", 
                    "Ill-informed decisions"
                ]
            },
    "Questions to Ask" : ["What guides my choices?","What is my heart leading me to do?","How might this decision transform me as a person?"]
    },
    {
    "name": "The Chariot",
    "number": "7",
    "img": theChariot,
    "fortune_telling": [
                "Victory is a certainty", 
                "Move ahead with all plans", 
                "Beware the jealousy of others"
            ], 
            "keywords": [
                "advancement", 
                "victory", 
                "triumph", 
                "success"
            ], 
            "meanings": {
                "light": [
                    "Breaking through barriers", 
                    "Moving forward with confidence and authority", 
                    "Reaching the pinnacle of success", 
                    "Basking in the glory of achievement", 
                    "Guiding an effort to total victory", 
                    "Establishing yourself as a worthy leader"
                ], 
                "shadow": [
                    "Resting on laurels", 
                    "Riding roughshod over the feelings or expectations of others", 
                    "Focusing more on past successes than future opportunities", 
                    "Failing to rein in impulsive behavior"
                ]
            },
    "Questions to Ask" : ["To what extent have I arrived? What will my next challenge be?","How can I use past achievements to their best advantage?","What would the criteria for real and meaningful success be?"]
    },
    {
    "name": "Strength",
    "number": "8",
    "img": strength,
        "fortune_telling": [
                "Your self-control will be tested", 
                "A woman will seek to change her partner or lover", 
                "You are a strong, capable person"
            ], 
            "keywords": [
                "discipline", 
                "boldness", 
                "self-discipline", 
                "power", 
                "vitality"
            ], 
            "meanings": {
                "light": [
                    "Imposing restrictions on yourself for your own benefit", 
                    "Bringing your passions under the control of reason", 
                    "Resisting impulses that work against your best interests", 
                    "Taking bold action"
                ], 
                "shadow": [
                    "Indulging weakness, even when you know it will damage your health and happiness", 
                    "Languishing in addiction", 
                    "Allowing your instincts to tame and conquer you", 
                    "Failing to take a stand when necessary"
                ]
            },
    "Questions to Ask" : ["To what extent is your life (or work) balanced?","How can you achieve greater objectivity?","What course of action would be fair to everyone concerned?"]
    },
    {
    "name": "The Hermit",
    "number": "9",
    "img": theHermit,
        "fortune_telling": [
                "A period of loneliness begins", 
                "One partner in a relationship departs", 
                "A search for love or money proves fruitless"
            ], 
            "keywords": [
                "solitude", 
                "experience", 
                "stillness", 
                "withdrawal"
            ], 
            "meanings": {
                "light": [
                    "Becoming or seeking out a guru", 
                    "Going on a retreat", 
                    "Recharging spiritual or creative batteries", 
                    "Lighting the way for those with less experience", 
                    "Stepping back to gain perspective"
                ], 
                "shadow": [
                    "Being a loner", 
                    "Fearing contact with others", 
                    "Becoming a know-it-all", 
                    "Inflating claims of expertise", 
                    "Hiding your skills and talents out of fear of unworthiness"
                ]
            },
    "Questions to Ask" : ["What would happen if I simply withdrew and took no action?","How can I get some perspective on the situation?","Who has walked this path before me? How can I enlist his or her help?"]
    },
    {
    "name": "Wheel of Fortune",
    "number": "10",
    "img": wheelOfFortune,
    "fortune_telling": [
                "Some events are in the hands of heaven", 
                "You've lived through this before", 
                "What happened then?"
            ], 
            "keywords": [
                "luck", 
                "randomness", 
                "cycles", 
                "karma", 
                "fate", 
                "revolution"
            ], 
            "meanings": {
                "light": [
                    "Allowing events to unfold", 
                    "Seeing the larger pattern in everyday events", 
                    "Trusting your luck", 
                    "Watching for cycles", 
                    "Believing that \"what goes around, comes around\""
                ], 
                "shadow": [
                    "Losing money gambling", 
                    "Refusing to do your part to bring a plan to fruition", 
                    "Taking a fatalistic approach to life", 
                    "Fighting the natural course of events"
                ]
            },
    "Questions to Ask" : ["How does this challenge fit into a larger pattern?","What role does luck play in my circumstances?","What can I control? How should I know when to relinquish control?"]
    },
    {
    "name": "Justice",
    "number": "11",
    "img": justice,
    "fortune_telling": [
                "A legal verdict will be rendered soon", 
                "Someone is making a decision", 
                "You need to get the facts"
            ], 
            "keywords": [
                "balance", 
                "law", 
                "fairness", 
                "objectivity"
            ], 
            "meanings": {
                "light": [
                    "Making an objective decision", 
                    "Weighing an issue carefully before taking action", 
                    "Appropriately scaling your reaction to a situation", 
                    "Getting all the facts", 
                    "Considering evidence", 
                    "Deliberating"
                ], 
                "shadow": [
                    "Delivering harsh criticism", 
                    "Obsessing on rules and regulations", 
                    "Playing by the book even when it is destructive or counterproductive to do so", 
                    "Confusing snap decisions with timely action", 
                    "Playing favorites"
                ]
            },
    "Questions to Ask" : ["How can I enhance my self-discipline?","What behaviors tempt me? How can I resist?","What instincts do I continue to struggle with today?"]
    },
    {
    "name": "The Hanged Man",
    "number": "12",
    "img": theHangedMan,
    "fortune_telling": [
                "A traitor is revealed", 
                "One of your friends is working against you", 
                "Change your ways or suffer the consequences"
            ], 
            "keywords": [
                "enlightenment", 
                "sacrifice", 
                "perspective", 
                "suspension", 
                "reversals"
            ], 
            "meanings": {
                "light": [
                    "Seeing growth opportunities in unpleasant events", 
                    "Experiencing a dramatic change in personal perspective", 
                    "Making the best of an unforeseen change in your life or work", 
                    "Suspending disbelief", 
                    "Making sacrifices"
                ], 
                "shadow": [
                    "Being untrue to yourself and your values", 
                    "Refusing to make sacrifices when appropriate", 
                    "Refusing to adapt to new situations", 
                    "Blaming others", 
                    "Profiting at the expense of others"
                ]
            },
    "Questions to Ask" : ["How can I radically alter my perspective?","How might being stuck actually be a blessing in disguise?","How can I help myself see the glass as half full?"]
    },
    {
    "name": "Death",
    "number": "13",
    "img": death,
    "fortune_telling": [
                "A relationship or illness ends suddenly", 
                "Limit travel and risk-taking", 
                "General gloom and doom"
            ], 
            "keywords": [
                "ending", 
                "conclusion", 
                "transition", 
                "passage", 
                "departure"
            ], 
            "meanings": {
                "light": [
                    "Bringing an unpleasant phase of life to an end", 
                    "Recognizing and celebrating the conclusion of something", 
                    "Putting bad habits to rest", 
                    "Becoming a new person", 
                    "Leaving one person, place, or thing for another", 
                    "Letting go"
                ], 
                "shadow": [
                    "Obsessing on death and dying", 
                    "Refusing to give up old habits or unhealthy relationships", 
                    "Insisting that everything and everyone should stay the same forever", 
                    "Failing to take good care of yourself"
                ]
            },
    "Questions to Ask" : ["What needs to end?","How might an ending actually be a blessing in this situation?","What's next?"]
    },
    {
    "name": "Temperance",
    "number": "14",
    "img": temperance,
    "fortune_telling": [
                "Someone's using drugs or alcohol to excess", 
                "It's time to get back on that diet"
            ], 
            "keywords": [
                "blending", 
                "synthesis", 
                "mediation", 
                "combination", 
                "harmony"
            ], 
            "meanings": {
                "light": [
                    "Bringing opposites together", 
                    "Moderating your actions or emotions", 
                    "Finding middle ground", 
                    "Reaching compromises", 
                    "Synthesizing solutions that please everyone involved", 
                    "Using the old to make something new"
                ], 
                "shadow": [
                    "Going to extremes", 
                    "Disrupting group efforts", 
                    "Ignoring healthy approaches to life", 
                    "Becoming an addict", 
                    "Practicing gluttony", 
                    "Tearing something or someone apart", 
                    "Breaking alliances"
                ]
            },
    "Questions to Ask" : ["How can I avoid extremes?","What does everyone involved have in common?","How might combining familiar things help me create something new?"]
    },
    {
    "name": "The Devil",
    "number": "15",
    "img": theDevil,
    "fortune_telling": [
                "Adultery and unfaithfulness", 
                "A string of extremely bad luck is coming your way", 
                "Beware evil influences and wolves in sheep's clothing"
            ], 
            "keywords": [
                "shadow", 
                "materialism", 
                "bondage", 
                "delusion"
            ], 
            "meanings": {
                "light": [
                    "Appreciating the luxuries that life has to offer", 
                    "Being comfortable in your own skin", 
                    "Enjoying your sexuality", 
                    "Splurging on an expensive personal item", 
                    "Embracing the fact that everyone has a darker side", 
                    "Dealing with unhealthy impulses in healthy ways"
                ], 
                "shadow": [
                    "Putting excessive emphasis on appearances", 
                    "Always wanting more", 
                    "Valuing possessions more than people or relationships", 
                    "Allowing base instincts to govern your life", 
                    "Being selfish", 
                    "Attributing your own dark impulses to outside forces or other people"
                ]
            },
    "Questions to Ask" : ["What enslaves me? How can I set myself free?","How can I re-evaluate the importance I assign to material things?","To what extent do my cravings define me?"]
    },
    {
    "name": "The Tower",
    "number": "16",
    "img": theTower,
    "fortune_telling": [
                "Impending disaster", 
                "Cancel plans and reverse decisions", 
                "Someone wants to take you down a notch or two", 
                "Don't hold back; say what you really mean"
            ], 
            "keywords": [
                "demolition", 
                "upheaval", 
                "deconstruction", 
                "disaster", 
                "destruction"
            ], 
            "meanings": {
                "light": [
                    "Breaking out of old, confining habits and mindsets", 
                    "Clearing the way for new growth", 
                    "Dispelling the influence of an inflated ego", 
                    "Getting back to basics", 
                    "Stripping away harmful illusions", 
                    "Receiving sudden insight"
                ], 
                "shadow": [
                    "Clinging to traditions that repress growth", 
                    "Engaging in willful blindness", 
                    "Rejecting evidence that change is needed", 
                    "Ignoring guidance from a higher power", 
                    "Maliciously engaging in destructive behavior"
                ]
            },
    "Questions to Ask" : ["How might the current situation dramatically alter my perspective?","How might this loss open the door for new growth?","What attitudes need to be struck down before I proceed?"]
    },
    {
    "name": "The Star",
    "number": "17",
    "img": theStar,
    "fortune_telling": [
                "Get an astrology chart drawn up", 
                "Someone is a little too starstruck", 
                "What's happening now has long been fore-ordained"
            ], 
            "keywords": [
                "hope", 
                "optimism", 
                "openness", 
                "certainty", 
                "faith", 
                "longing", 
                "truth"
            ], 
            "meanings": {
                "light": [
                    "Hoping for the best", 
                    "Believing good things happen to good people", 
                    "Seeing events in the best possible light", 
                    "Adopting a generous spirit", 
                    "Seeking guidance from above", 
                    "Embracing possibility over probability"
                ], 
                "shadow": [
                    "Denying unpleasant truths", 
                    "Denying personal accountability and saying, \"Things just happen!\"",
                    "Ignoring signs and omens", 
                    "Preferring illusion to reality", 
                    "Spreading pessimism and stinginess of spirit"
                ]
            },
    "Questions to Ask" : ["What would my higher power direct me to do?","How can I be less self-conscious and guarded?","How can I better attune myself to the abundance of life's blessings?"]
    },
    {
    "name": "The Moon",
    "number": "18",
    "img": theMoon,
    "fortune_telling": [
                "Watch for problems at the end of the month", 
                "Someone you know needs to howl at the moon more often", 
                "Someone is about to change his or her mind about an important decision"
            ], 
            "keywords": [
                "mystery", 
                "fantasy", 
                "imagination", 
                "dreams", 
                "uncertainty"
            ], 
            "meanings": {
                "light": [
                    "Enjoying healthy fantasies and daydreams", 
                    "Using your imagination", 
                    "Practicing magic or celebrating the magic of everyday life", 
                    "Attuning yourself to the cycles of nature", 
                    "Embracing the unknown"
                ], 
                "shadow": [
                    "Becoming unable to separate fantasy from reality", 
                    "Suffering from delusions", 
                    "Losing your appreciation for the fantastic or magical", 
                    "Adopting a ruthlessly logical mindset", 
                    "Failing to appreciate life's mysteries"
                ]
            },
    "Questions to Ask" : ["How can I face my fears and move forward?","What helpers can serve me as guides through my personal darkness?","How can I deal with the unknown in healthy ways?"]
    },
    {
    "name": "The Sun",
    "number": "19",
    "img": theSun,
    "fortune_telling": [
                "Everything's coming up roses (or sunflowers, whatever the case may be)", 
                "Whatever's on your mind, go for it because you can't lose today"
            ], 
            "keywords": [
                "joy", 
                "brilliance", 
                "validation", 
                "attention", 
                "energy"
            ], 
            "meanings": {
                "light": [
                    "Seeing things clearly", 
                    "Experiencing intense joy", 
                    "Celebrating your own successes", 
                    "Knowing you're good at what you do", 
                    "Gaining recognition for your personal genius"
                ], 
                "shadow": [
                    "Being dazzled by your own accomplishments", 
                    "Becoming absorbed in your own self-image", 
                    "Feeling rushed and distracted", 
                    "Exerting yourself to the point of exhaustion", 
                    "Overstating your abilities or misrepresenting your achievements"
                ]
            },
    "Questions to Ask" : ["How can I take best advantage of the attention coming my way?","What are my highest spiritual goals?","How can I avoid being bedazzled by the energy swirling around me?"]
    },
    {
    "name": "Judgement",
    "number": "20",
    "img": judgement,
    "fortune_telling": [
                "An old issue you thought was over will come up again today", 
                "Get ready for huge changes: break-ups, sudden calls from old friends, and unexpected setbacks", 
                "God's trying to get your attention"
            ], 
            "keywords": [
                "revival", 
                "renewal", 
                "resurrection", 
                "evaluation", 
                "invitation"
            ], 
            "meanings": {
                "light": [
                    "Receiving a wake-up call", 
                    "Discovering a new purpose in life", 
                    "Becoming totally and completely yourself", 
                    "Receiving a well-deserved reward", 
                    "Passing an evaluation or examination", 
                    "Welcoming the start of a new phase of life"
                ], 
                "shadow": [
                    "Being weighed in the balances and found wanting", 
                    "Failing to measure up to a well-defined standard", 
                    "Being caught goofing off or misbehaving", 
                    "Failing to prepare for an examination you know is coming", 
                    "Rejecting an opportunity to reinvent yourself"
                ]
            },
    "Questions to Ask" : ["What is the main thing I need to realize about myself?","In what way might the universe be trying to get my attention?","If I were to reinvent myself, what would I become?"]
    },
    {
    "name": "The World",
    "number": "21",
    "img": theWorld,
    "fortune_telling": [
                "Winning the lottery", 
                "Getting your heart's desire", 
                "Having everything you ever imagined having"
            ], 
            "keywords": [
                "wholeness", 
                "integration", 
                "totality", 
                "completeness", 
                "fullness"
            ], 
            "meanings": {
                "light": [
                    "Having it all", 
                    "Knowing and loving yourself as completely as possible", 
                    "Seeing the interconnection of all things and people", 
                    "Enhancing your perspective", 
                    "Living life to its fullest", 
                    "Understanding the meaning of life"
                ], 
                "shadow": [
                    "Allowing greed and envy to prevent you from enjoying what you do possess", 
                    "Failing to see the larger design in ordinary events", 
                    "Believing that everything that exists can be touched, counted, or measured", 
                    "Failing to see the divine reflected in those around you"
                ]
            },
    "Questions to Ask" : ["For me, what would having it all mean?","How aware am I of my own connectedness to the world around me?","What keeps me from having it all right now, today?"]
    }])

    const selectCard = () => {
      let randomNumber = Math.floor(Math.random() * 22);
      const randomCard = cards[randomNumber]
      console.log("randomly chosen card: " + randomCard.name)
      // splice/toSpliced not working - can be given same card twice over
      // const newCardsArray = cardsArray.toSpliced(randomNumber, 1)
      const newCardsArray = cards.filter((card) => card.name !== randomCard.name)
      setCards(newCardsArray)
      return randomCard
    }
    

    const handlePastCard = function () {
      const selectedPastCard = selectCard()
      setPastCard(selectedPastCard)
      console.log("past card: " + selectedPastCard.name)
    }

    const handlePresentCard = function () {
      const selectedPresentCard = selectCard()
      setPresentCard(selectedPresentCard)
      console.log("present card: " + selectedPresentCard.name)
    }

    const handleFutureCard = function () {
      const selectedFutureCard = selectCard()
      setFutureCard(selectedFutureCard)
      console.log("future card: " + selectedFutureCard.name)
    }


  return (
    <>
    <h1>TAROT</h1>
    <TarotBox 
      cards={cards}
      pastCard={pastCard}
      handlePastCard={handlePastCard}
      handlePresentCard={handlePresentCard}
      handleFutureCard={handleFutureCard}/>
  </>
  );
}

export default App;
