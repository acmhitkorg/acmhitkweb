import { Event } from "@/types"

export const upcomingEvents: Event[] = [
    {
        title: "Bug Bash",
        date: "August 2025",
        time: "To be announced",
        location: "To be announced",
        type: "Competition",
        cardDescription:
            "A solo debugging and code refactoring challenge that tests your problem-solving skills under pressure. The event will conclude with a live Glitch Boss round where participants will need to fix bugs in real-time.",
        speaker: "To be announced",
        capacity: "30 participants",
        status: "",
    },
    {
        title: "BrainByte Tech Talk & Quiz",
        date: "September 2025",
        time: "To be announced",
        location: "To be announced",
        type: "Seminar",
        cardDescription:
            "A tech talk by an ACM delegate, followed by an interactive quiz session led by an eminent person from the industry, around September.",
        speaker: "To be announced",
        capacity: "150 participants",
        status: "",
    },
    {
        title: "CodeSprint 1.0",
        date: "October 2025",
        time: "To be announced",
        location: "To be announced",
        type: "Competition",
        cardDescription:
            "A fast-paced solo DSA showdown where coders race against time to crack algorithmic challenges. Test your problem-solving speed and accuracy in this exciting competition.",
        speaker: "To be announced",
        capacity: "100 participants",
        status: "",
    },
    {
        title: "Idea Storm",
        date: "February 2026",
        time: "To be announced",
        location: "To be announced",
        type: "Ideathon",
        cardDescription:
            "A high-energy ideathon where participants pitch innovative ideas and battle for the spotlight. Bring your creativity and problem-solving skills to the table!",
        speaker: "To be announced",
        capacity: "20 teams",
        status: "",
    },
    {
        title: "Code & Clue: ACM Tech Treasure Hunt",
        date: "February 2026",
        time: "To be announced",
        location: "To be announced",
        type: "Competition",
        cardDescription:
            "A coding and puzzle-based treasure hunt combining logic, encryption, and problem-solving. Teams of 3-5 will compete across various checkpoints leading to an exciting finale. An offline workshop may be included to prepare participants.",
        speaker: "To be announced",
        capacity: "15 teams",
        status: "",
    },
    {
        title: "Distinguished Speaker Tech Talk",
        date: "March 2026",
        time: "To be announced",
        location: "To be announced",
        type: "Seminar",
        cardDescription:
            "An engaging session featuring an industry expert sharing insights on emerging technologies and current industry trends. This talk aims to inspire students and provide valuable career guidance.",
        speaker: "To be announced",
        capacity: "200 participants",
        status: "",
    },
];

export const pastEvents: Event[] = [
    // 2025 Events
    {
        title:
            "Program Paradox",
        date: "2025-08-08",
        time: "2:30 PM to 5:00 PM",
        location: "The Heritage Academy Auditorium",
        type: "Workshop",
        cardDescription: "An interactive workshop session exploring the fascinating concept of the Halting Problem in computer science.",
        description: `
        <p>Ever wondered if it's possible to design a program that can predict what another program will do? At first glance, it might sound like a thrilling possibility—but as you'll discover, there's a fascinating twist.</p>
        
        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-semibold mb-2">Event Details</h3>
            <ul class="space-y-1">
              <li><strong>Date:</strong> August 8, 2025</li>
              <li><strong>Time:</strong> 2:30 PM to 5:00 PM</li>
              <li><strong>Venue:</strong> The Heritage Academy Auditorium</li>
              <li><strong>Speakers:</strong> Mohak Sarkar & Aryan Ghosh</li>
              <li><strong>Eligibility:</strong> Open to all students, staff, and faculty of HITK</li>
            </ul>
          </div>
  
          <div>
            <h3 class="text-lg font-semibold mb-2">Schedule</h3>
            <div class="space-y-2">
              <div class="bg-muted/50 p-3 rounded-lg">
                <h4 class="font-medium">2:30 PM - 3:00 PM: Introduction</h4>
                <p class="text-sm text-muted-foreground">Introduction to the Halting Problem</p>
              </div>
              <div class="bg-muted/50 p-3 rounded-lg">
                <h4 class="font-medium">3:00 PM - 4:00 PM: Interactive Workshop</h4>
                <p class="text-sm text-muted-foreground">Dive into the Halting Problem with hands-on activities</p>
              </div>
              <div class="bg-muted/50 p-3 rounded-lg">
                <h4 class="font-medium">4:00 PM - 4:45 PM: Quiz Showdown</h4>
                <p class="text-sm text-muted-foreground">Test your knowledge and win exciting prizes</p>
              </div>
              <div class="bg-muted/50 p-3 rounded-lg">
                <h4 class="font-medium">4:45 PM - 5:00 PM: Valedictory</h4>
                <p class="text-sm text-muted-foreground">Wrap up the event with a final thought.</p>
              </div>
            </div>
            <h3 class="text-lg font-semibold mb-2">Prizes & Goodies</h3>
            <ul class="list-disc pl-5 space-y-1">
              <li>Exclusive rewards for top performers</li>
              <li>Networking opportunities</li>
            </ul>
          </div>
  
          <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 class="font-semibold text-blue-700 dark:text-blue-300 mb-2">What to Bring</h3>
            <ul class="list-disc pl-5 space-y-1 text-blue-600 dark:text-blue-200">
              <li>Your mobile phone</li>
              <li>Stable internet connection (for quiz round)</li>
              <li>Enthusiasm to learn and compete!</li>
            </ul>
            <p class="mt-3 text-sm text-blue-600/80 dark:text-blue-300/80">
              <em>Registration is free but mandatory. Limited seats available!</em><br />
              <strong>Registration closes:</strong> August 6th, 11:59 PM IST
            </p>
          </div>
        </div>
      `,
        speaker: "Mohak Sarkar & Aryan Ghosh",
        capacity: "Limited seats available",
        status: "",
        registration_link: "https://forms.gle/bdc6NkxPgExRPEsw5",
        registration_deadline: "2025-08-06T23:59:00",
        bannerImage: "/Events/Program-Paradox-0.png",
        photos: []
    },
    {
        title: "The celebrated birthday problem",
        date: "August 8, 2024",
        type: "Seminar",
        cardDescription: "What is the chance that among a group of friends, at least 2 of them have the same birthday? This is the celebrated birthday problem, which connects many seemingly disparate problems both within and beyond mathematics.",
        description: `"Birthday Paradox and its Algorithmic Applications" by Dr. Bhaswar B.
  Bhattacharya Abstract: What is the chance that among a group of friends, at least
  2 of them have the same birthday? This is the celebrated birthday problem, which
  connects many seemingly disparate problems both within and beyond
  mathematics. In this talk, we will discuss different variations of the birthday
  paradox and their applications in computer science, specifically distributional
  property testing and computation of discrete logarithms. (ii)"God Forever
  Geometrizes" by Dr. Bhargab B. Bhattacharya Abstract: As Plato observed, nature
  is governed by the eternal laws of geometry. In this talk, we show some
  fascinating examples to demonstrate how geometry manifests in physics and in
  ancient architectures. Next, from the perspective of computational geometry, we
  demystify the problem of cutting a pizza or a sandwich. Finally, we demonstrate
  how 2D point-set polygonization yields assistance to differently-abled persons.`,
        attendees: 82,
        speaker: "Dr. Bhaswar B. Bhattacharya",
        location: "THA Hall, Heritage Academy",
        photos: [],
    },
    {
        title: "God Forever Geometrizes",
        date: "August 8, 2024",
        type: "Seminar",
        cardDescription: "As Plato observed, nature is governed by the eternal laws of geometry.",
        description: `As Plato observed, nature is governed by the eternal laws of geometry.
  In this talk, we show some fascinating examples to demonstrate how geometry
  manifests in physics and in ancient architecture. Next, from the perspective of
  computational geometry, we demystify the problem of cutting a pizza or a
  sandwich. Finally, we demonstrate how 2D point-set polygonization yields
  assistance to differently-abled persons.`,
        attendees: 82,
        speaker: "Dr. Bhargab B. Bhattacharya",
        location: "THA Hall, Heritage Academy",
        photos: [],
    },
    {
        title: " Technical Debt in Machine Learning Systems",
        date: "September 4, 2024",
        type: "Seminar",
        cardDescription: "In the context of software development, technical debt relates to the cost of refactoring or rework in the future that arises out of the prioritization of immediate expedience over long-term design.",
        description: `In the context of software development, technical debt relates to the
  cost of refactoring or rework in the future that arises out of the prioritization of
  immediate expedience over long-term design. This talk discusses the accrual
  and management of technical debt in machine learning systems.`,
        attendees: 36,
        speaker: "Uday Shaw",
        location: "ICT Building",
        photos: [],
    },
    {
        title: `Evaluation of Large Language Models: The Good, The Bad, and The
  Opportunities`,
        date: "Auguest 4, 2023",
        type: "Seminar",
        cardDescription: "The recent sensation ChatGPT, powered by large language models (LLM) can be used to mimic a human conversationalist, ChatGPT is versatile.",
        description: ` The recent sensation ChatGPT, powered by large language models
  (LLM) can be used to mimic a human conversationalist, ChatGPT is versatile.
  Among countless examples, it can write and debug computer programs,
  compose music, teleplays, fairy tales, and student essays, answer test questions,
  etc. It is an open issue: How can deep learning be incorporated to make it more
  efficient and reduce its drawbacks?`,
        attendees: 100,
        speaker: "Dr Tanmoy Chakraborty",
        location: "SV Auditorium, CB Block, HITK",
        photos: [],
    },
    {
        title: "Semiconductors to AI: Shaping Our Digital Future",
        date: "August 8, 2023",
        type: "Seminar",
        cardDescription: "The talk begins with the evolution of computers and the synergistic roles played by the twin disciplines of electronics engineering and computer science and how that synergy brought computers to its all-pervasive present state.",
        description: ` The talk begins with the evolution of computers and the synergistic
  roles played by the twin disciplines of electronics engineering and computer
  science and how that synergy brought computers to its all-pervasive present
  state. After showing the spectacular growth of semiconductor devices and the
  ubiquitous nature of this technology, the talk hints at how this growth fuelled
  renewed interest in artificial intelligence and machine learning and the revolution
  that we all are currently witnessing because of that. In particular, the discourse
  shows the current advances in natural language processing and its potential
  impact on our everyday life. The talk concludes by showing some of those
  impacts of AI/ML and their possible far-reaching effects on our society ? both
  good and adverse.`,
        attendees: 23,
        speaker: "",
        location: "",
        photos: [],
    },
    {
        title: "Recommender Systems: Your Fairy Godmother of Choices",
        date: "September 27, 2023",
        type: "Seminar",
        cardDescription: "Have you ever wondered how online platforms magically suggest products, movies, or music that seem tailor-made for you? It's not magic; it's the power of Recommender Systems (RS). Join us in this informative and hands-on session as we demystify the world of RS and learn how these digital fairy godmothers work their magic to enhance user experiences. In the first part of our talk, we'll dive deep into the world of Recommender Systems, shedding light on their applications, workings, and various types. You'll gain a comprehensive understanding of the foundations of RS, setting the stage for your journey into the world of personalized recommendations. In the second part, get ready to put your knowledge to the test as we guide you through the process of building a simple RS model. We'll use a user-friendly framework, making it accessible to everyone. We'll share practical tips and best practices to help you fine-tune your RS and ensure it provides meaningful recommendations. Join us for this exciting journey into the world of Recommender Systems, and discover how they can be your own fairy godmother of choices, making every digital interaction feel like it was designed just for you.",
        description: `Have you ever wondered how online platforms magically suggest
  products, movies, or music that seem tailor-made for you? It's not magic; it's the
  power of Recommender Systems (RS). Join us in this informative and hands-on
  session as we demystify the world of RS and learn how these digital fairy
  godmothers work their magic to enhance user experiences. In the first part of our
  talk, we'll dive deep into the world of Recommender Systems, shedding light on
  their applications, workings, and various types. You'll gain a comprehensive
  understanding of the foundations of RS, setting the stage for your journey into
  the world of personalized recommendations. In the second part, get ready to put
  your knowledge to the test as we guide you through the process of building a
  simple RS model. We'll use a user-friendly framework, making it accessible to
  everyone. We'll share practical tips and best practices to help you fine-tune your
  RS and ensure it provides meaningful recommendations. Join us for this exciting
  journey into the world of Recommender Systems, and discover how they can be
  your own fairy godmother of choices, making every digital interaction feel like it
  was designed just for you.`,
        attendees: 47,
        speaker: "Ashmi Banerjee",
        location: "CB 504, CB Block, HITK",
        photos: [],
    },
    {
        title: "Computability and Complexity Theory - A Brief Introduction",
        date: "December 14, 2023",
        type: "Workshop",
        cardDescription: "What does it mean for something to be computable? What are some of the mathematical properties of general-purpose computers? What are their limitations? These are typical questions that are of interest to computability theorists.",
        description: `What does it mean for something to be computable? What are some of
  the mathematical properties of general-purpose computers? What are their
  limitations? These are typical questions that are of interest to computability
  theorists. In this talk, we shall discuss answers to some of these questions and
  more. We shall also discuss some common results of Complexity Theory, by
  applying some space/time restriction on our model of computation.`,
        attendees: 20,
        speaker: "",
        location: "",
        photos: [],
    },
    {
        title: "Brain Research - Implications in Science, Engineering and Society",
        date: "February 9, 2024",
        type: "Seminar",
        cardDescription: "The brain is one of the most connected organs of an organism. It directly connects to all the organs through a network of neurons. The brain interacts with the body through a combination of electrochemical and chemical processes. The brain also controls the body indirectly through hormones and neuropeptides. Similarly, the body also controls the brain by modulating its function through indirect and direct means.",
        description: `The brain is one of the most connected organs of an organism. It
  directly connects to all the organs through a network of neurons. The brain
  interacts with the body through a combination of electrochemical and chemical
  processes. The brain also controls the body indirectly through hormones and
  neuropeptides. Similarly, the body also controls the brain by modulating its
  function through indirect and direct means. Besides, the brain is at the center of
  self-awareness and societal organization. All these require highly complex,
  real-time data processing and decision-making system. How does the brain
  manage it? Although the answer is not as simple as the question, neuroscience
  research does, however, clarify a great deal about controlling, modifying, and
  mimicking some of the brain functions in artificial systems. Understanding the
  brain involves a range of disciplines ranging from genetics and psychology to
  computer science.`,
        attendees: 45,
        speaker: "",
        location: "",
        photos: [],
    },
    {
        title:
            "Solving the Classic Distinct Element Problem with a Strikingly Simple Algorithm that Captivated Donald Knuth",
        date: "April 15, 2024",
        type: "Workshop",
        cardDescription: "We will present a very simple streaming algorithm on F_0 estimation that also caught the eye of Donald E. Knuth.",
        description: `We will present a very simple streaming algorithm on F_0 estimation
  that also caught the eye of Donald E. Knuth. In a recent article, Donald E. Knuth
  started with the following two paragraphs: "Sourav Chakraborty, N. V.
  Vinodchandran, and Kuldeep S. Meel have recently proposed an interesting
  algorithm for the following problem: A stream of elements (a1, a2,..., am) is
  input, one at a time, and we want to know how many of them are distinct. In
  other words, if A = {a1, a2,..., am} is the set of elements in the stream, with
  multiplicities ignored, we want to know |A|, the size of that set. But we don?t
  have much memory; in fact, |A| is probably a lot larger than the number of
  elements that we can hold in memory at any one time. What is a good strategy for
  computing an unbiased estimate of |A|? Their algorithm is not only interesting, it
  is extremely simple. Furthermore, it?s wonderfully suited to teaching students
  who are learning the basics of computer science. (Indeed, ever since I saw it, a
  few days ago, I?ve been unable to resist trying to explain the ideas to just about
  everybody I meet.) Therefore I?m pretty sure that something like this will
  eventually become a standard textbook topic. This note is an initial
  approximation to what I might write about it if I were preparing a textbook about
  data streams."`,
        attendees: 15,
        speaker: "",
        location: "",
        photos: [],
    },
    {
        title: "Generative A.I. workshop",
        date: "April 16, 2024",
        type: "Workshop",
        cardDescription: "Understanding the broad view of Generative AI, Addressing the Fear, Types of Generative AI architectures, LLM and LIM, Building an AI tool (Using Hugging Face), QnA",
        description: `Program Overview 1. Understanding the broad view of Generative AI 2.
  Addressing the Fear 3. Types of Generative AI architectures 4. LLM and LIM 5.
  Building an AI tool (Using Hugging Face) 6. QnA`,
        attendees: 10,
        speaker: "",
        location: "",
        photos: [],
    },
];