import React, { useState } from "react";
import "./styles.css";

var podcasts = {
  Educational: [
    {
      image:
        "https://pl.tedcdn.com/rss_feed_images/ted_talks_main_podcast/audio.png",
      name: "Ted Talks Daily",
      exp:
        "Join host and journalist Elise Hu for thought-provoking ideas on every subject imaginable."
    },

    {
      image:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/57/e3/ff/57e3ff56-34af-7852-3ce7-73c02da99498/mza_10486649224032733609.jpg/1200x1200bb.jpg",
      name: "English Speeches",
      exp:
        "The main idea in this podcast is helping English students to practice their listening and reading."
    },

    {
      image: "https://i.scdn.co/image/447753b16cf894610f2f290b8ebea8253410a9c7",
      name: "The Mindset Mentor",
      exp:
        "The Mindset Mentor™ podcast is designed for anyone desiring motivation, direction, and focus in life."
    }
  ],
  Bussiness: [
    {
      image:
        "https://cdn.ramseysolutions.net/ruby/dr-show/assets/TDRS-Podcast-Tile-sm-a04f45615366b8037469f0c3fdf3191424d9744a45eb4120eb0d5150ff999775.jpg",
      name: "The Dave Ramsey Show",
      exp:
        "Take control of your money once and for all. The Dave Ramsey Show offers up straight talk on life and money."
    },

    {
      image:
        "https://img4.luminarypodcasts.com/v1/podcast/1c238915-004a-4d48-af70-e0b3ea031ae1/default/h_500,w_500/image/s--vTdDpsXG--/aHR0cHM6Ly9kM3Qzb3pmdG1kbWgzaS5jbG91ZGZyb250Lm5ldC9wcm9kdWN0aW9uL3BvZGNhc3RfdXBsb2FkZWRfbm9sb2dvLzI0NTQzNjkvMjQ1NDM2OS0xNTcwNzI4NTM5MTAxLTc2MDNkMTgyZjRjMTEuanBn.jpg",
      name: "The GaryVee Audio Experience",
      exp:
        "On this podcast you'll find a mix of my #AskGaryVee show episodes, keynote speeches on marketing and business."
    },

    {
      image:
        "https://pbs.twimg.com/profile_images/1146487693251174401/SpigjoQt_400x400.png",
      name: "Waveform: The MKBHD Podcast",
      exp:
        "Marques Brownlee a YouTuber reviewing everything from the newest smartphones to cameras to electric cars."
    }
  ],
  Lifestyle: [
    {
      image:
        "https://i.iheart.com/v3/url/aHR0cHM6Ly9jb250ZW50LnByb2R1Y3Rpb24uY2RuLmFydDE5LmNvbS9pbWFnZXMvZjUvMDkvMzAvYzIvZjUwOTMwYzItOWIxZS00M2M5LTgyMWMtNmY2YWFlYjFiZjM5Lzk4YmJlMzIzMzgzMWQ1MGRiNmQ5NzI4OWJjODAyYjk3ZDIzYWUzNzZkNWYxNWQ3ODNlODRjZjg3ODgwMjk0MDBjYTQxMzA0MTAzN2Q5MTc5NDA3ZTIxNzg0MzRlZDczNWY1OTUzODI5MWE5MjY1NjVlMWJjNDQxOTU5NWJlMTM1LmpwZWc=?surrogate=1cOXl179JY-syhxYSCX6Q0eiIcGoV7te-ks9KjlRNxatJ_Z4OUVrWi_LfobfZnKLxOGPKtGPM4EjL8dgOs1x1i6xaGCEksa83LnDnJWze9x5aQ6d-ObTt7Aw1yDaXSYSZwKqWVKlgSRfW3Nam1kuWBn2VhADNUgGJewQOl27-JX_3cqsKpFsGnYA686SFNN_i1GuIOhzumsiP-glPVaVawGZH4KSjpjqSt6GnMeUnoqiaJq3Y_OdRV2AT7ROxLQvX9sKTy4g2l2uO_f9cmxuJyw51YFnsUUjWfzqIFAy731ivxbnszdDjcjnhLEI_SvTys-rwDW_6Pph9gS2Ht00k_GR7s-thXFv4eWQD4DKhUuae2I7e93Kp03dRzjCLIR2ASrBDmA_Wo-12j6dIM1mavE8ZDjW0vZfeAyvPNIUIpdZyzeh8NKBB02YvCersQoa1qXUElpWWEN31BwYU0oza2KZECWM-jis6VQKkSPZ2lwbhq64n4udX1mID7Gxf2dg5djd64jh6Co%3D",
      name: "On Purpose with Jay Shetty",
      exp:
        " He is fortunate to have fascinating conversations with the most insightful people in the world, and on my podcast, He is sharing those conversation with you."
    },

    {
      image:
        "https://content.production.cdn.art19.com/images/1a/80/2b/6c/1a802b6c-c339-4e0e-8d9a-8eae98d638ff/4f49f9706a378cea0fab2086f4d193d48344666070425c92d5c94b7c1223c6e7377778364c06a23a6d0fb601681311241e6eee10b5ba41dddea34b65b92a62e2.jpeg",
      name: "Think Fast Talk Smart",
      exp:
        "Join Matt Abrahams, a lecturer of Strategic Communication at Stanford Graduate School of Business, as he sits down with experts in the field to discuss real-world challenges."
    },

    {
      image:
        "https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/ab/b8/0e/abb80ef9-588a-48e9-1ac2-72fd151c16d7/mza_2796235766778186581.jpg/1200x1200bb.jpg",
      name: "The Overthink Tank",
      exp:
        "A podcast where certifiable overthinker and comedian Surbhi Bagga overthinks stuff along with a fun guest!"
    }
  ]
};

export default function App() {
  const [expod, namepod] = useState("Educational");
  function podClickHandler(pod) {
    namepod(pod);
  }
  return (
    <div className="App">
      <h1
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "-0.5rem"
        }}
      >
        Top Podcasts
      </h1>
      <div
        style={{
          fontFamily: `'Roboto', sans-serif`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5rem",
          margin: "0.5rem"
        }}
      >
        {Object.keys(podcasts).map((pod) => (
          <button
            onClick={() => podClickHandler(pod)}
            style={{
              height: "2.5rem",
              width: "7rem",
              margin: "0.5rem",
              border: "0rem",
              borderRadius: "0.7rem",
              fontFamily: `'Source Sans Pro', sans-serif`,
              fontSize: "1rem"
            }}
          >
            {pod}
          </button>
        ))}
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          className="content"
        >
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {podcasts[expod].map((pod) => (
              <li
                key={pod.name}
                style={{
                  listStyle: "none",
                  backgroundColor: "#10B981",
                  margin: "1rem",
                  padding: "1rem",
                  borderRadius: "1rem",
                  height: "25rem",
                  width: "18rem",
                  boxShadow: "0rem 0.2rem 0.6rem black"
                }}
              >
                <img
                  src={pod.image}
                  alt={pod.name}
                  style={{
                    margin: "1rem",
                    height: "10rem",
                    borderRadius: "1rem",
                    boxShadow: "0rem 0rem 0.6rem black"
                  }}
                />
                <div
                  style={{
                    marginTop: "-0.2rem",
                    marginBottom: "0.5rem",
                    padding: "0.5rem",
                    fontSize: "1.5rem"
                  }}
                >
                  {pod.name}
                </div>
                <div
                  style={{
                    marginTop: "-0.2rem",
                    marginBottom: "0.5rem",
                    padding: "0.5rem",
                    fontFamily: `'Source Sans Pro', sans-serif`
                  }}
                >
                  {pod.exp}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
