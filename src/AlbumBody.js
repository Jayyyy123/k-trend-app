import React from "react";
import "./AlbumBody.css";

function AlbumBody({ image }) {
  return (
    <div className="album__body">
      <h1>Ice Cream</h1>
      <hr />
      <div className="album__top">
        <div className="albumImage__section">
          <img src={image} alt="" />
          <div className="album__table">
            <table>
              <tr>
                <th>Artist</th>
                <td>BLACKPINK</td>
              </tr>
              <tr>
                <th>Release date</th>
                <td>August 28, 2020</td>
              </tr>
              <tr>
                <th>Recorded</th>
                <td>2019/2020</td>
              </tr>
              <tr>
                <th>Genre</th>
                <td>Bubblegum pop, trap, pop, electropop</td>
              </tr>
              <tr>
                <th>Length</th>
                <td>2:56</td>
              </tr>
              <tr>
                <th>Album</th>
                <td>The Album</td>
              </tr>
              <tr>
                <th>Label</th>
                <td>YG Entertainment Interscope Records</td>
              </tr>
              <tr>
                <th>Lyrics</th>
                <td>
                  Selena Gomez, Teddy, Tommy Brown, Ariana Grande, Victoria
                  Monét, Bekuh Boom, 24, Mr. Franks
                </td>
              </tr>
            </table>
          </div>
        </div>

        {/* Album about, mv, bg */}
        <div className="album__center">
          <div className="album__about">
            <h2>About</h2>
            <hr />
            <p>
              Ice Cream is a collaboration between BLACKPINK and Selena Gomez.
              It was released on August 28, 2020. It serves as the second
              pre-release single and the second track of BLACKPINK's upcoming
              debut Korean studio album, The Album.
            </p>
          </div>
          <div className="album__mv">
            <h2>Music Video</h2>
            <hr />
            <p>
              The music video for "Ice Cream" was directed by frequent director
              and collaborator Seo Hyun-seung. It garnered 79.08 million views
              in its first 24 hours, marking the third biggest 24-hour debut for
              a music video on the platform. BLACKPINK's scenes were filmed in
              South Korea, while the scenes featuring Gomez were filmed
              separately in the United States due to the COVID-19 pandemic.
            </p>
          </div>
          <div className="album__bg">
            <h2>Background and Release</h2>
            <hr />
            <p>
              On July 23, 2020, a teaser poster for a new collaboration single
              between BLACKPINK and an unnamed artist , set to be released in
              August was posted on BLACKPINK's social media accounts. Later, on
              August 12, 2020, the unnamed artist was revealed to be American
              singer Selena Gomez. On August 21, 2020, it was revealed that the
              title of the collaboration would be "Ice Cream".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumBody;
