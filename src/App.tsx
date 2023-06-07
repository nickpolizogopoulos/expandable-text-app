import ExpandableText from "./components/ExpandableText";
import PhotoLink from "./components/PhotoLink";
import Quote from "./components/Quote";
import Title from "./components/Title";
import Heading from "./components/Heading";

const App = () => {
  return (<>
      <div className="mb-4" style={{
          padding: '20px',
          backgroundColor: '#f5f5f5',
          }}>
            
        <Heading>Two iconic and legendary Spacecrafts</Heading>
      </div>

      <div className="mb-4" style={{
          padding: '10px',
          backgroundColor: '#f5f5f5',
          }}>
        <Title
          title="- Progress Rocket Space Center - Soyuz Spacecraft"
          secondaryText=" / Roscosmos 1966 - present, 150+ total missions as of July 2023."
        ></Title>

        <ExpandableText>
          Soyuz (Russian: Союз, IPA: [sɐˈjus], lit. 'Union') is a series of
          spacecraft which has been in service since the 1960s, having made more
          than 140 flights. It was designed for the Soviet space program by the
          Korolev Design Bureau (now Energia). The Soyuz succeeded the Voskhod
          spacecraft and was originally built as part of the Soviet crewed lunar
          programs. It is launched on a Soyuz rocket from the Baikonur
          Cosmodrome in Kazakhstan. Between the 2011 retirement of the Space
          Shuttle and the 2020 demo flight of SpaceX Crew Dragon, the Soyuz
          served as the only means to ferry crew to or from the International
          Space Station, for which it remains heavily used. Although China did
          launch crewed Shenzhou flights during this time, none of them docked
          with the ISS. The first Soyuz flight was uncrewed and started on 28
          November 1966. The first Soyuz mission with a crew, Soyuz 1, launched
          on 23 April 1967 but ended with a crash due to a parachute failure,
          killing cosmonaut Vladimir Komarov. The following flight was uncrewed.
          Soyuz 3, launched on 26 October 1968, became the program's first
          successful crewed mission. The only other flight to suffer a fatal
          accident, Soyuz 11, killed its crew of three when the cabin
          depressurized just before reentry. These are the only humans to date
          who are known to have died above the Kármán line. Despite these early
          incidents, Soyuz is widely considered the world's safest, most
          cost-effective human spaceflight vehicle, established by its
          unparalleled length of operational history. Soyuz spacecraft were used
          to carry cosmonauts to and from Salyut and later Mir Soviet space
          stations, and are now used for transport to and from the International
          Space Station (ISS). At least one Soyuz spacecraft is docked to ISS at
          all times for use as an escape craft in the event of an emergency. The
          spacecraft is intended to be replaced by the six-person Orel
          spacecraft.
        </ExpandableText>

        <Quote
          name="Sunita Williams"
          text="The earth looks so beautiful and amazing, we could clearly see the curved shape of the earth."
          source="describing her view of the earth from the Soyuz Spacecraft."
        ></Quote>

        <PhotoLink
          name="Soyuz"
          link="https://upload.wikimedia.org/wikipedia/commons/2/25/The_Soyuz_MS-09_spacecraft_is_pictured_docked_to_the_Rassvet_module.jpg"
        ></PhotoLink>
      </div>

      
      <div className="mb-5" style={{
          padding: '10px',
          backgroundColor: '#f5f5f5',
          }}>
        <Title
          title="- Rockwell International - Space Shuttle Spacecraft"
          secondaryText=" / NASA 1981 - 2011, 135 total missions."
        ></Title>

        <ExpandableText>
          The Space Shuttle orbiter is the spaceplane component of the Space
          Shuttle, a partially reusable orbital spacecraft system that was part
          of the discontinued Space Shuttle program. Operated from 1977 to 2011
          by NASA, the U.S. space agency, this vehicle could carry astronauts
          and payloads into low Earth orbit, perform in-space operations, then
          re-enter the atmosphere and land as a glider, returning its crew and
          any on-board payload to the Earth. Six orbiters were built for flight:
          Enterprise, Columbia, Challenger, Discovery, Atlantis, and Endeavour.
          All were built in Palmdale, California, by the Pittsburgh,
          Pennsylvania-based Rockwell International company. The first orbiter,
          Enterprise, made its maiden flight in 1977. An unpowered glider, it
          was carried by a modified Boeing 747 airliner called the Shuttle
          Carrier Aircraft and released for a series of atmospheric test flights
          and landings. Enterprise was partially disassembled and retired after
          completion of critical testing. The remaining orbiters were fully
          operational spacecraft, and were launched vertically as part of the
          Space Shuttle stack. Columbia was the first space-worthy orbiter; it
          made its inaugural flight in 1981. Challenger, Discovery, and Atlantis
          followed in 1983, 1984, and 1985 respectively. In 1986, Challenger was
          destroyed in an accident shortly after its 10th launch. Endeavour was
          built as Challenger's successor, and was first launched in 1992. In
          2003, Columbia was destroyed during re-entry, leaving just three
          remaining orbiters. Discovery completed its final flight on March 9,
          2011, and Endeavour completed its final flight on June 1, 2011.
          Atlantis completed the final Shuttle flight, STS-135, on July 21,
          2011. In addition to their crews and payloads, the reusable orbiter
          carried most of the Space Shuttle System's liquid-propellant rocket
          system, but both the liquid hydrogen fuel and the liquid oxygen
          oxidizer for its three main rocket engines were fed from an external
          cryogenic propellant tank. Additionally, two reusable solid rocket
          boosters (SRBs) provided additional thrust for approximately the first
          two minutes of launch. The orbiters themselves did carry hypergolic
          propellants for their Reaction Control System (RCS) thrusters and
          Orbital Maneuvering System (OMS) engines.
        </ExpandableText>

        <Quote
          name="Chris Hadfield"
          text="It was like dancing in the cosmos."
          source="as Space Shuttle Discovery rendezvoused with Mir (World First Modular Space Station by Russians 1986 - 1996) during STS-63 mission."
        ></Quote>

        <PhotoLink
          name="Space Shuttle"
          link="https://upload.wikimedia.org/wikipedia/commons/e/e8/STS-132_Atlantis_at_ISS_1.jpg"
        ></PhotoLink>
      </div>

    </>);
};

export default App;
