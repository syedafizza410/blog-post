"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const blogPosts = {
  "why-cats-love-boxes": {
  title: "Why Cats Love Boxes",
  content: {
    paragraphs: [
      "Cats have always been known for their peculiar behaviors, and their inexplicable love for boxes is one of the most fascinating and amusing traits. Whether it's a tiny box barely big enough for their paws or a large cardboard container, cats can't resist hopping into it. But what drives this curious obsession? Let’s explore the mystery of why cats love boxes so much.",
    ],
    points: [
      {
        heading: "1. A Sense of Security",
        text: "At their core, cats are instinctual creatures, carrying behaviors passed down from their wild ancestors. In the wild, cats often sought out enclosed spaces, such as caves or dense bushes, as a way to stay safe from predators. Boxes mimic this natural hiding instinct by providing a confined and cozy space where they can feel secure and protected. To a cat, a box is like a fortress where they can observe their surroundings while remaining hidden from view.",
      },
      {
        heading: "2. The Comfort of Warmth",
        text: "Cats are drawn to warmth, and cardboard boxes are surprisingly good insulators. The confined space of a box helps trap a cat's body heat, creating a snug and warm environment. This is especially appealing to cats in cooler climates or during colder seasons. Imagine a cozy bed with the perfect temperature — that's how a box feels to your furry friend!",
      },
      {
        heading: "3. Stress Relief and Anxiety Reduction",
        text: "Studies have shown that boxes can help reduce stress in cats. For example, a 2014 study conducted in a Dutch animal shelter found that cats with access to hiding boxes adjusted more quickly to their new environment compared to those without boxes. When cats are stressed or anxious, retreating to a box provides a calming escape. For a cat, the box becomes a personal sanctuary where they can decompress and feel safe.",
      },
      {
        heading: "4. Perfect for Ambushing and Play",
        text: "Cats are natural hunters, and they love stalking and pouncing on imaginary prey. A box provides the perfect hiding spot for them to ambush their toys, other pets, or even unsuspecting humans. This playful behavior is not only entertaining for us to watch but also vital for a cat’s mental and physical stimulation. A box becomes a jungle gym, a hunting ground, and a playground all rolled into one!",
      },
      {
        heading: "5. Curiosity and Exploration",
        text: "The phrase 'curiosity killed the cat' exists for a reason. Cats are inherently curious creatures, and a box is like a mysterious new world waiting to be explored. They’ll sniff it, paw at it, climb in, and maybe even chew on it to figure out what it is. To a cat, a box is a puzzle, a place of intrigue, and a source of endless entertainment.",
      },
      {
        heading: "6. It's All About the Texture",
        text: "Cats love scratching and chewing on cardboard. The rough texture of a box is satisfying for their claws and helps them maintain healthy nail growth. Scratching also serves as a form of marking their territory, leaving both a scent and visible marks to claim ownership of the box. Chewing on cardboard, on the other hand, may be linked to teething behaviors or simply boredom.",
      },
    ],
  },
},

"understanding-purring": {
  title: "Understanding Purring",
  content: {
    paragraphs: [
      "Purring is one of the most fascinating and comforting sounds a cat can make. Whether your feline friend is nestled in your lap or lying in a sunny spot on the floor, the rhythmic vibration of their purr often feels like an expression of pure contentment. But is purring always a sign of happiness? The answer is more complex than it seems."
    ],
    points: [
      {
        heading: "1. Purring as a Sign of Contentment",
        text: "One of the most common reasons cats purr is to show they are happy and relaxed. When a cat feels safe and secure, they often purr to express their contentment. For example, a kitten purring while nursing from its mother, an adult cat purring while being petted by its favorite human, or a cat settling down for a nap in its cozy bed. In these moments, purring serves as a soothing mechanism, both for the cat and its human companions."
      },
      {
        heading: "2. Purring as a Means of Communication",
        text: "Cats also use purring as a form of communication. While meowing is often directed at humans, purring can be a more subtle way of getting attention. For instance, a cat might purr to signal they want to be fed or during social interactions with other cats, signaling friendliness and a desire for companionship. By purring, cats may be trying to convey a specific message or need."
      },
      {
        heading: "3. Purring During Healing and Self-Comfort",
        text: "Surprisingly, purring is not just a sign of happiness; it can also occur when a cat is in pain or feeling unwell. Studies have shown that purring has therapeutic benefits for cats, such as healing bones and tissues, reducing stress, and managing pain. The frequency of a cat’s purr (25-150 Hz) is believed to promote healing and reduce pain, making it more than just an emotional expression—it's a physical tool for well-being."
      },
      {
        heading: "4. Purring as a Survival Mechanism",
        text: "For kittens, purring starts very early in life—often within days of being born. This serves as an important survival mechanism. Kittens purr while nursing to reassure their mother that they are safe and content. The mother cat may purr to comfort her kittens and create a calm environment. This early association between purring and survival highlights how integral it is to a cat’s development."
      },
      {
        heading: "5. Purring and Bonding With Humans",
        text: "Cats often purr when they are close to their humans, which strengthens the bond between the two. The sound and vibrations of a purr can be deeply comforting to humans, reducing stress and creating a sense of companionship. This mutual benefit makes purring a key element in the relationship between cats and their owners."
      },
      {
        heading: "6. When to Pay Attention to Purring",
        text: "While purring is usually harmless, it’s essential to pay attention to the context. If a cat is purring while also displaying signs of distress—such as hiding, refusing to eat, or vocalizing in pain—it may indicate an underlying issue that needs attention. Signs to watch for include excessive purring accompanied by lethargy or changes in behavior, purring during visible signs of discomfort (such as limping or difficulty breathing), or purring while avoiding interaction or hiding in unusual places. If you notice these signs, consult a veterinarian."
      }
    ]
  }
},

  "cat-communication": {
  title: "Cat Communication",
  content: {
    paragraphs: [
      "Cats are often misunderstood as aloof or mysterious creatures, but they have a rich and intricate way of communicating with both humans and other cats. From their vocalizations to subtle body language, every purr, meow, or swish of the tail carries a specific message. Understanding these signals can strengthen your bond with your feline friend and help you respond appropriately to their needs.",
    ],
    points: [
      {
        heading: "1. Vocal Communication",
        text: "Cats use a variety of sounds to communicate with humans and other animals. While they may not 'speak' like humans, their vocalizations are highly nuanced and tailored to convey specific emotions or desires.",
      },
      {
        heading: "Common Vocalizations",
        text: "- **Short Meow**: A friendly greeting, like saying 'Hello!'.\n- **Multiple Meows**: Excitement or urgency, such as 'Feed me!' or 'I’m happy to see you!'.\n- **Long, Drawn-Out Meow**: A demand, like asking for food or attention.\n- **High-Pitched Meow**: Discomfort, pain, or a strong plea for something.\n- **Low-Pitched Meow**: Frustration or dissatisfaction.\n- **Chirping or Trilling**: Affection, excitement, or calling attention to something interesting (like birds outside the window).\n- **Hissing or Growling**: A warning to stay away, signaling fear or aggression.",
      },
      {
        heading: "2. Body Language",
        text: "Non-verbal cues are a crucial part of a cat’s communication. By observing their posture, tail movements, and ear positions, you can decode what your cat is trying to tell you.",
      },
      {
        heading: "Key Body Language Signals",
        text: "- **Ears Forward**: Curiosity, interest, or contentment.\n- **Ears Flat or Turned Back**: Fear, aggression, or annoyance.\n- **Tail Up**: Confidence, happiness, and friendliness.\n- **Tail Swishing or Twitching**: Annoyance, focus, or excitement.\n- **Arched Back with Fur Raised**: Fear or defensive aggression.\n- **Rolling Onto Back**: Relaxation, trust, or an invitation to play.",
      },
      {
        heading: "3. Eye Contact and Expressions",
        text: "Cats use their eyes to communicate trust, affection, or even warning signals. Paying attention to their gaze can help you understand their mood and intentions.",
      },
      {
        heading: "Eye Signals",
        text: "- **Slow Blinking**: A sign of trust and affection.\n- **Dilated Pupils**: Excitement, fear, or arousal. Pupils may also dilate in low light conditions.\n- **Staring Without Blinking**: A sign of dominance or challenge, especially toward other cats.\n- **Half-Closed Eyes**: Relaxation and contentment, often seen when your cat is napping or enjoying a calm moment.",
      },
      {
        heading: "4. Scent Communication",
        text: "Cats have scent glands on their cheeks, paws, and tails, which they use to mark their territory or signal familiarity. Their sense of smell is highly developed, and they rely on it for social interaction and navigation.",
      },
      {
        heading: "Scent Marking Behaviors",
        text: "- **Head-Butting or Cheek Rubbing**: Deposits their scent onto you, marking you as part of their territory and signaling affection.\n- **Scratching**: Leaves both a visual and scent mark, often to establish ownership of an area or object.\n- **Urine Spraying**: A territorial behavior that may occur when a cat feels stressed or threatened.",
      },
      {
        heading: "5. Social Interaction with Humans",
        text: "Cats have evolved to communicate differently with humans than with other cats. For instance, adult cats rarely meow at each other but will meow frequently at humans to get attention. They learn to adapt their behavior based on your reactions, creating a unique form of interaction.",
      },
      {
        heading: "Signs of Affection",
        text: "- **Kneading**: Often seen when a cat is relaxed and happy, this behavior is a throwback to kittenhood when they kneaded their mother while nursing.\n- **Purring**: Usually a sign of contentment, but it can also indicate pain or anxiety in some situations.\n- **Following You**: A sign of companionship and trust.",
      },
      {
        heading: "6. Social Interaction with Other Cats",
        text: "When interacting with other cats, felines use a combination of vocalizations, body language, and scent marking to establish relationships, set boundaries, and resolve conflicts.",
      },
      {
        heading: "Social Signals Among Cats",
        text: "- **Nose Touching**: A friendly greeting or an acknowledgment of each other’s presence.\n- **Mutual Grooming**: A sign of trust and affection between bonded cats.\n- **Hissing or Growling**: A warning to maintain distance, often used in territorial disputes.\n- **Tail Position**: A raised tail is a friendly signal, while a puffed-up tail indicates fear or aggression.",
      },
    ],
  },
},
"the-secrets-of-cat-naps": {
  title: "The Secrets of Cat Naps",
  content: {
    paragraphs: [
      "Cats are experts in the art of napping, often spending up to 16 hours a day snoozing. While it may seem excessive to us, their sleeping habits are deeply rooted in their biology and instincts. But why do cats sleep so much? What do their sleeping positions reveal about them? Let’s dive into the fascinating world of feline slumber and uncover the secrets of cat naps.",
    ],
    points: [
      {
        heading: "1. Why Do Cats Sleep So Much?",
        text: "Cats are natural predators, and their sleeping habits are a survival adaptation. In the wild, hunting requires intense bursts of energy to stalk, chase, and catch prey. To prepare for these physically demanding activities, cats evolved to conserve their energy by sleeping for long periods. Domesticated cats retain this instinct, even though their 'prey' might just be a toy mouse or a piece of string. Their sleeping patterns mimic the behavior of their wild ancestors, who needed to rest between hunts to stay sharp and ready for action.",
      },
      {
        heading: "2. Different Sleeping Positions and What They Mean",
        text: "Cats dont just sleep—they have an array of unique sleeping positions, each with its own meaning. Observing these positions can give you insight into how your cat is feeling.",
      },
      {
        heading: "Common Sleeping Positions",
        text: "- **Curled Up**: A defensive position, often signaling they want to feel safe and secure.\n- **Stretched Out**: Indicates relaxation and trust in their surroundings.\n- **On Their Back**: A sign they feel completely safe and are in a playful mood.\n- **Loaf Position**: When the cat tucks its paws under its body, it’s a sign they’re resting but still alert.",
      },
      {
        heading: "3. How to Tell If Your Cat Is Getting Quality Sleep",
        text: "Cats experience two types of sleep: light sleep and deep sleep. During light sleep, their ears may twitch, and their eyes may open slightly at the smallest sound. Cats in this stage are still alert and ready to react to potential threats. During deep sleep, your cat enters REM (rapid eye movement) sleep, which is vital for their physical and mental health. You may notice their paws twitching or their whiskers moving—these are signs they’re dreaming.",
      },
      {
        heading: "4. When to Worry About Your Cat’s Sleep Patterns",
        text: "While cats are notorious for sleeping a lot, changes in their sleep patterns can sometimes signal underlying health issues. Excessive sleeping accompanied by lethargy or loss of interest in eating or playing may indicate illness. Similarly, restlessness or insomnia might point to stress or discomfort. If your cat starts sleeping in unusual or hidden spots, it could be a sign of anxiety or illness. Always consult a veterinarian if you notice these signs.",
      },
      {
        heading: "5. How to Create the Perfect Sleep Environment for Your Cat",
        text: "Cats love comfort, and providing them with a cozy sleeping spot can improve their quality of life. Offer soft bedding, place their bed in a quiet corner of your home, and ensure their sleeping area is free from cold drafts. Cats enjoy variety, so provide multiple cozy spots around your home to suit their mood. Placing a bed near a sunny window is always a bonus for daytime naps.",
      },
    ],
  },
},
"the-cat's-whiskers": {
  title: "The Cat's Whiskers",
  content: {
    paragraphs: [
      "A cat’s whiskers are one of their most striking and unique features. Those long, sensitive hairs aren’t just for show—they serve as critical sensory tools that help cats navigate their world, communicate their emotions, and even detect danger. Let’s explore the fascinating world of cat whiskers and understand their significance."
    ],
    points: [
      {
        heading: "1. What Are Whiskers?",
        text: "Whiskers, scientifically known as vibrissae, are specialized hairs deeply embedded in a cat’s skin. Unlike ordinary fur, whiskers are connected to highly sensitive nerve endings, making them essential for gathering information about a cat's surroundings. They are thicker and stiffer than regular fur and are located not only on the sides of a cat’s nose but also above the eyes, on the chin, and even on the back of the front legs."
      },
      {
        heading: "2. The Role of Whiskers in Navigation",
        text: "Cats are known for their agility and ability to navigate even in the darkest environments. Whiskers help cats gauge the width of an opening before they attempt to squeeze through. They also detect changes in air currents, allowing cats to sense obstacles or movement around them, even in pitch darkness."
      },
      {
        heading: "3. Whiskers and Communication",
        text: "Whiskers are not just functional—they also serve as emotional indicators. Forward-pointing whiskers show curiosity or excitement, relaxed whiskers indicate a calm and content state, and pulled-back whiskers signal fear or aggression. Observing their whiskers can give you insight into your cat’s emotions."
      },
      {
        heading: "4. Whiskers as a Hunting Tool",
        text: "In the wild, whiskers are invaluable for a cat’s hunting instincts. They help cats locate and capture prey with precision by detecting close-range movements. The whiskers on a cat’s legs (carpal whiskers) help them detect prey movements, while facial whiskers guide accurate bites during hunting."
      },
      {
        heading: "5. Caring for Your Cat’s Whiskers",
        text: "Whiskers are extremely sensitive, and improper care can cause discomfort for your cat. Never trim your cat’s whiskers, as they are essential for sensory perception and balance. Use wide, shallow bowls to avoid 'whisker fatigue,' which occurs when whiskers constantly brush against the sides of a bowl."
      },
      {
        heading: "6. When to Worry About Whiskers",
        text: "While whiskers naturally shed and grow back, certain issues may indicate health concerns. Excessive breakage may signal stress or health problems, and redness or swelling near the whisker area could signal an infection or allergy. If you notice any unusual whisker-related issues, consult a veterinarian."
      }
    ]
  }
},
"the-language-of-a-cat's-tail": {
  title: "The Language of a Cat’s Tail",
  content: {
    paragraphs: [
      "A cat’s tail is like a mood ring—its position and movement can tell you a lot about how your furry friend is feeling. While cats may not speak the way humans do, their tails are an expressive communication tool that helps them convey emotions, intentions, and even warnings. Understanding the language of a cat’s tail can strengthen your bond with your feline companion and ensure you respond to their needs appropriately."
    ],
    points: [
      {
        heading: "1. Tail Movements and Their Meanings",
        text: "Cats use their tails to express a wide range of emotions. Paying attention to how a cat moves or positions its tail can help you interpret their mood and intentions."
      },
      {
        heading: "Common Tail Movements",
        text: "- **Tail Up**: A raised tail is a friendly signal, often seen when your cat greets you. It shows confidence and contentment.\n- **Tail Down**: When a cat’s tail hangs low or is tucked under their body, it indicates fear, submission, or insecurity.\n- **Slow Swishing**: A slow, deliberate swish often means your cat is focused or mildly annoyed. This is commonly seen during play or hunting.\n- **Rapid Swishing or Thumping**: Fast, forceful tail movements are a sign of frustration or agitation. It’s best to give your cat some space in this situation.\n- **Puffed-Up Tail**: A tail that looks puffed or bushy is a clear signal of fear or defensive aggression, often accompanied by an arched back.\n- **Quivering Tail**: A tail that quivers or vibrates while upright is often a sign of excitement, typically seen when a cat is happy to see you or marking territory."
      },
      {
        heading: "2. Tail Positions and What They Mean",
        text: "A cat’s tail position, whether stationary or moving, conveys specific messages about their mood and intentions."
      },
      {
        heading: "Key Tail Positions",
        text: "- **Straight Up**: This confident posture is a sign that your cat is happy, secure, and content.\n- **Tail Slightly Curved at the Top**: A tail that curves gently at the top indicates curiosity or playful interest.\n- **Tail Tucked Under the Body**: When a cat’s tail is tucked beneath their body, it’s a sign of fear or submission. Cats in this position may feel threatened or anxious.\n- **Tail Wrapped Around Another Cat or Human**: This affectionate gesture is akin to a human hug. It shows trust and bonding.\n- **Tail Low and Straight Out**: A tail held low and straight may indicate caution or uncertainty."
      },
      {
        heading: "3. The Role of the Tail in Communication with Other Cats",
        text: "Cats not only use their tails to communicate with humans but also to send signals to other cats. For example, a tail held high with a slight curve may indicate an invitation to play, while a puffed-up tail warns other cats to stay away."
      },
      {
        heading: "4. Why Understanding Tail Language Matters",
        text: "Interpreting your cat’s tail language can help you better respond to their emotions and needs. Whether they’re feeling playful, scared, or annoyed, understanding these signals can deepen your connection with your pet."
      },
      {
        heading: "5. How to Respond to Tail Signals",
        text: "- **Playful or Happy Tails**: Engage with your cat using toys or affectionate petting when their tail is upright or curved.\n- **Fearful or Defensive Tails**: Give your cat a safe space and avoid forcing interaction when their tail is tucked or puffed.\n- **Cautious or Curious Tails**: Allow your cat to approach at their own pace when their tail is low or slightly curved."
      }
    ]
  }
},
"why-do-cat's-love-sunbathing": {
  title: "Why Do Cats Love Sunbathing?",
  content: {
    paragraphs: [
      "Have you ever noticed your cat sprawled out in a sunny spot, basking in the warmth of the sun? Cats seem irresistibly drawn to sunlight, often following sunbeams as they move across the room. While it’s undeniably adorable, there’s more to this behavior than meets the eye. Let’s explore why cats love sunbathing and how it benefits their well-being."
    ],
    points: [
      {
        heading: "1. Warmth and Comfort",
        text: "Cats are naturally drawn to warmth, and sunlight provides an instant source of cozy comfort. Unlike humans, who maintain a consistent body temperature, cats have a slightly higher resting temperature of around 102°F (38.9°C). Sunlight helps cats maintain their body temperature without expending extra energy and relaxes their muscles and joints, making sunny spots the perfect napping location."
      },
      {
        heading: "2. Energy Conservation",
        text: "Cats are masters of energy conservation, spending up to 16 hours a day sleeping. By sunbathing, they can nap comfortably while using less energy to regulate their body temperature. This behavior is a remnant of their wild ancestors, who sought out sunny spots to rest between hunts."
      },
      {
        heading: "3. Instinctual Behavior from the Wild",
        text: "In the wild, cats relied on sunlight to stay warm, especially during cooler months. This instinct is still present in domestic cats, who seek out sunny spots even when they live in temperature-controlled homes. Wild cats often associated sunlight with safety and comfort, reinforcing this behavior."
      },
      {
        heading: "4. Boosting Mood and Reducing Stress",
        text: "Just like humans, cats benefit from sunlight in ways that go beyond physical warmth. Sunbathing can have a calming effect on cats, reducing stress and promoting relaxation. Sunlight helps regulate a cat’s natural rhythms, improving their overall mood and creating a sense of security and contentment."
      },
      {
        heading: "5. Vitamin D Absorption",
        text: "Sunlight is often associated with Vitamin D, but for cats, the process works differently. Natural oils in a cat’s skin produce Vitamin D when exposed to sunlight. When cats groom themselves after sunbathing, they ingest the Vitamin D from their fur. While Vitamin D is essential for healthy bones and immune function, cats rely primarily on their diet for sufficient intake."
      },
      {
        heading: "6. Safety Tips for Sunbathing Cats",
        text: "- **Prevent Overheating**: Ensure your cat has access to shaded areas to cool off and limit sunbathing sessions during hot summer days.\n- **Protect Against Sunburn**: Light-colored or hairless cats are more prone to sunburn, especially on their ears and nose. Use pet-safe sunscreen if your cat spends time in direct sunlight outdoors.\n- **Hydration is Key**: Always provide fresh water to keep your cat hydrated, especially after long naps in the sun."
      }
    ]
  }
}
};

type BlogPostKeys = keyof typeof blogPosts;

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = blogPosts[slug as BlogPostKeys];
  const router = useRouter();

  const[isAuthenticated, setIsAuthenticated] = useState(false);
  const [comments, setComments] = useState<{ name: string; comment:string }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
    } else {
      router.push("/login"); 
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); 
    router.push("/"); 
  };

  const handleAddComment = () => {
    if (newComment.trim() && name.trim()) {
      setComments([...comments, { name, comment: newComment }]);
      setNewComment("");
      setName("");
    }
  };

  if (!post) return <p className="text-center text-gray-500">Post not found</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center py-8 hover:shadow-lg">
      <div className="max-w-3xl mx-auto px-4 bg-white rounded-lg shadow p-6">
         <a href="/blog" className="flex justify-left lg:left-96  text-blue-900">
        <FaArrowLeft className="mr-2" size={50} />
      </a>

         {isAuthenticated && (
          <div className="flex justify-end mb-5">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        )}

        <h1 className="text-4xl font-bold text-blue-900 mb-6 mt-9">{post.title}</h1>

        {post.content.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-800 font-bold mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {post.content.points.length > 0 && (
          <ul className="list-disc list-inside text-gray-700 font-bold mb-6 space-y-2">
            {post.content.points.map((point, index) => (
              <li key={index} className="leading-relaxed">
                {typeof point === "string" ? (
                  <p className="text-gray-700">{point}</p>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold text-blue-600 mb-2">
                      {point.heading}
                    </h2>
                    <p className="text-gray-700">{point.text}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
          <ul className="space-y-3 mb-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-3 rounded shadow text-gray-700"
                >
                   <span className="font-bold">{comment.name}:</span> {comment.comment}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </ul>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg shadow p-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
            className="w-full border border-gray-300 rounded-lg shadow p-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-900 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
