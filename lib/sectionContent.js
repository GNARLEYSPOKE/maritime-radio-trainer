export const sectionContent = {
  1: {
    title: 'Maritime Mobile Service',
    keyPoints: [
      {
        heading: 'ROC(M) Certification',
        content: 'The Restricted Operator Certificate - Maritime (ROC(M)) is required to operate a marine radio on recreational vessels in Canada. It demonstrates knowledge of radio procedures, safety, and Canadian maritime regulations.',
      },
      {
        heading: 'Radio Station Licence',
        content: 'A Radio Station Licence is NOT required for vessels operating exclusively in Canadian waters. It IS required when travelling to foreign waters (e.g., U.S. waters). When required, it must be posted on the vessel. A radio station licence will not be issued to anyone under 16 years old.',
      },
      {
        heading: 'Regulatory Authorities',
        content: 'Maritime radio is regulated by Innovation, Science and Economic Development Canada (IC) through the Radio Regulations, the International Telecommunications Union (ITU), the International Maritime Organization (IMO), and the Canadian Coast Guard (CCG).',
      },
      {
        heading: 'What Constitutes Operating',
        content: 'According to IC Legal Services, "operating" a Maritime Mobile Service radio means turning it on. The radio must be licensed even if never used for transmission.',
      },
      {
        heading: 'VHF Communication Range',
        content: 'The approximate VHF ship-to-ship communication range is 20 nautical miles. This is due to line-of-sight propagation - VHF signals follow the curvature of the Earth and cannot bend significantly around obstacles.',
      },
      {
        heading: 'Channel 16 and Channel 70',
        content: 'Channel 16 (156.800 MHz) is the designated VHF Distress and safety calling channel for voice communications. Channel 70 (156.525 MHz) is the DSC digital calling channel with a dedicated receiver on DSC-equipped radios.',
      },
      {
        heading: 'VHF Power Output',
        content: 'The maximum authorized power output for a VHF marine radio is 25 watts. Handheld VHF marine radios typically output a maximum of 6 watts.',
      },
      {
        heading: 'Radio Silence Periods',
        content: 'On MF 2182 kHz, radio silence periods begin on the hour and half hour and extend for 3 minutes. During these periods, only distress communications are permitted.',
      },
      {
        heading: 'Secrecy of Communications',
        content: 'Information obtained from listening to radio communications must not be disclosed or used, except with the consent of persons involved. This applies to all maritime radio traffic.',
      },
      {
        heading: 'Required Documents',
        content: 'To legally operate a marine radio in Canadian waters, you must have: (1) A valid ROC(M) certificate (operator must carry), (2) MMSI number (for DSC-equipped vessels). A Radio Station Licence is additionally required when operating in foreign waters.',
      },
    ],
  },
  2: {
    title: 'Procedures',
    keyPoints: [
      {
        heading: 'Phonetic Alphabet',
        content: 'Letters are transmitted using standard phonetic words to ensure clarity. Each letter has a unique phonetic word (Alpha, Bravo, Charlie, etc.). Numbers are transmitted digit-by-digit (5800 = "Five Eight Zero Zero")',
      },
      {
        heading: 'Procedural Words',
        content: 'Key procedural words include: Roger (message received), Wilco (will comply), Over (my transmission ends, expect response), Out (conversation ends, no response expected). Never say "Over and Out" - use either one or the other.',
      },
      {
        heading: 'Readability Scale',
        content: 'Readability is rated 1-5: (1) Bad - unreadable, (2) Poor - readable now and then, (3) Fair - readable but with difficulty, (4) Good - readable, (5) Excellent - perfectly readable.',
      },
      {
        heading: 'Communication Priority',
        content: 'Radio communication priorities in descending order: (1) Distress, (2) Urgency, (3) Safety, (4) Routine. Lower priority traffic must wait for higher priority communications to complete.',
      },
      {
        heading: '24-Hour Time',
        content: 'Maritime radio uses 24-hour time format (0000 to 2359). Example: 8:30 PM = 2030 (or 20:30 with colon). Always use four digits without a colon in radio transmission.',
      },
      {
        heading: 'Simplex vs Duplex',
        content: 'Simplex channels transmit and receive on the same frequency. Duplex channels use two different frequencies - one for transmit, one for receive. Most maritime channels are simplex.',
      },
      {
        heading: 'Balanced Calling',
        content: 'When calling another station, say the called station\'s name the same number of times as your own (e.g., "Charlie Charlie Charlie, this is Echo Echo Echo").',
      },
      {
        heading: 'VHF Channels',
        content: 'Channel 16 (156.800 MHz) is the primary calling and distress channel. Channel 6 (156.300 MHz) is for Safety and Intership communications. Channel 9 is for commercial traffic.',
      },
      {
        heading: 'Listening Before Transmitting',
        content: 'Always listen first to ensure the channel is clear before transmitting. This prevents harmful interference and ensures you don\'t interrupt important communications.',
      },
      {
        heading: 'Radio Checks',
        content: 'A radio check confirms your radio is transmitting clearly. Request: "Station A, this is Station B, radio check." Response should include readability number and signal strength assessment.',
      },
    ],
  },
  3: {
    title: 'GMDSS Overview',
    keyPoints: [
      {
        heading: 'What is GMDSS',
        content: 'The Global Maritime Distress and Safety System (GMDSS) is an internationally agreed-upon set of safety procedures, systems, and devices for alerting rescue authorities and for coordinating rescue efforts in response to maritime distress situations.',
      },
      {
        heading: 'GMDSS Components',
        content: 'Primary components include: DSC (Digital Selective Calling) radios, EPIRB (Emergency Position Indicating Radio Beacon), SART (Search and Rescue Transponder), and NAVTEX (Navigational Telex) for weather and safety information.',
      },
      {
        heading: 'Sea Areas',
        content: 'GMDSS defines four Sea Areas: A1 (within range of shore-based VHF-DSC), A2 (within range of MF-DSC), A3 (within range of INMARSAT satellite), A4 (polar regions). As of January 1, 2019, neither Canada nor the United States has officially declared Sea Area A2 operational.',
      },
      {
        heading: 'MMSI Numbers',
        content: 'MMSI (Maritime Mobile Service Identity) is a unique 9-digit number assigned to vessels with DSC radios. Canadian MMSIs begin with 316. MMSI identifies the vessel in DSC communications.',
      },
      {
        heading: 'Group MMSI',
        content: 'A Group MMSI (one leading zero) is used for simultaneous DSC calls to multiple vessels. For example, all fishing vessels in a region might share a Group MMSI.',
      },
      {
        heading: 'Land-Based Station MMSI',
        content: 'Land-based Coast Guard Radio stations have MMSI numbers indicated by two leading zeros (00xxxxxxx).',
      },
      {
        heading: 'Pleasure Craft Carriage Requirements',
        content: 'GMDSS equipment carriage is VOLUNTARY for pleasure craft in Canada, unlike commercial vessels where it is mandatory. Many recreational boaters still equip with DSC radios for safety.',
      },
      {
        heading: 'DSC Digital Calling',
        content: 'Channel 70 (156.525 MHz) is dedicated for DSC digital calling on VHF. All DSC-equipped radios have a dedicated receiver on this channel.',
      },
      {
        heading: 'GMDSS Development',
        content: 'GMDSS was developed by the International Maritime Organization (IMO) as a successor to the older MCTS (Maritime Communication Tracking System) to improve distress communication reliability.',
      },
      {
        heading: 'Video Resources',
        content: 'View "Overview of GMDSS" on YouTube for additional visual information about system components and procedures.',
      },
    ],
  },
  4: {
    title: 'Digital Selective Calling (DSC)',
    keyPoints: [
      {
        heading: 'What is DSC',
        content: 'Digital Selective Calling (DSC) is a digital radio communications system that allows vessels to automatically call specific stations by pressing buttons rather than speaking. DSC is the primary component of GMDSS.',
      },
      {
        heading: 'Class D Radios',
        content: 'Class D DSC radios are the standard for recreational boaters and small vessel operators. They are compact, relatively affordable, and suitable for pleasure craft operations.',
      },
      {
        heading: 'MMSI Requirement',
        content: 'A valid MMSI number MUST be programmed into your DSC radio for it to function. Without an MMSI, the radio cannot send DSC distress alerts or make DSC calls.',
      },
      {
        heading: 'Sending a DSC Distress Alert',
        content: 'To send a DSC Distress alert, press and hold the red Distress button for 3-5 seconds. The radio will transmit your vessel\'s information (name, MMSI, position if GPS-equipped) to all nearby stations and rescue coordination centers.',
      },
      {
        heading: 'Channel 70 Receiver',
        content: 'DSC-equipped VHF radios have a dedicated receiver on Channel 70 (156.525 MHz) that monitors for DSC alerts even when the radio is tuned to another channel.',
      },
      {
        heading: 'Distress Button Testing',
        content: 'You CANNOT legally test the DSC Distress button - it can only be used in a genuine distress emergency. Testing would alert rescue services unnecessarily and could result in fines.',
      },
      {
        heading: 'Distress Alert Retransmission',
        content: 'After sending a DSC Distress alert, the radio will automatically retransmit the alert every 3.5-4.5 minutes until cancelled or acknowledged.',
      },
      {
        heading: 'Class D vs Other Classes',
        content: 'Class D radios are for pleasure craft. Class A/B radios (commercial vessels) can issue Distress Acknowledgments. Class H covers VHF handheld radios with integrated GPS and DSC.',
      },
      {
        heading: 'Position Update Requirements',
        content: 'If your DSC radio does not have GPS interfaced, you must manually update the vessel\'s position in the radio at least every 4 hours to ensure accurate location information in case of distress.',
      },
      {
        heading: 'Video Resources',
        content: 'See "DSC Radios" by Icom USA and "Overview of DSC" by Icom UK on YouTube for detailed demonstrations of DSC radio operation.',
      },
    ],
  },
  5: {
    title: 'Routine Communications',
    keyPoints: [
      {
        heading: 'Radio Preparation Steps',
        content: '(1) Switch on the radio, (2) Select the desired channel, (3) Adjust the squelch, (4) Adjust the volume, (5) LISTEN for at least 30 seconds, (6) Then transmit. Always listen first!',
      },
      {
        heading: 'Setting the Squelch',
        content: 'The squelch prevents static noise when no signal is present. Adjust by lowering the squelch until you hear static, then raise it slightly until the static just stops. This setting receives the weakest signals.',
      },
      {
        heading: 'Balanced Calling',
        content: 'Say the station you\'re calling 3 times, then your station 3 times: "Mary Mary Mary, this is John John John." This balanced approach ensures both stations are heard.',
      },
      {
        heading: 'DSC Routine Calls',
        content: 'In routine DSC calling, if no acknowledgement is received within 3 minutes, the call may be repeated. However, further calling attempts should wait at least 15 minutes.',
      },
      {
        heading: 'Voice Calling on Channel 16',
        content: 'When calling another station using voice on Channel 16, if no response after two calls at 2-minute intervals, wait at least 3 minutes (preferably 15) before calling again.',
      },
      {
        heading: 'Contacting Coast Guard',
        content: 'When contacting Coast Guard Radio, always state the channel on which you are calling. Listen on that channel and speak clearly.',
      },
      {
        heading: 'Ending Communications',
        content: 'Both stations must sign off using their station identifiers at the end of the communication. Example: "This is John, out" or "John clear."',
      },
      {
        heading: 'Controlling vs Calling Station',
        content: 'The station being called is the controlling station - they direct the communication and determine when to switch channels or end the call.',
      },
      {
        heading: 'Position Requests',
        content: 'DSC Position Request allows you to ask another vessel for their current position digitally without voice communication. The vessel can respond with their GPS coordinates automatically.',
      },
      {
        heading: 'Video Resources',
        content: 'Review "Overview of DSC" by Icom UK on YouTube for demonstration of routine DSC calling and voice communications on VHF.',
      },
    ],
  },
  6: {
    title: 'Distress Communications',
    keyPoints: [
      {
        heading: 'Mayday Definition',
        content: 'Mayday indicates that a vessel is threatened by grave and imminent danger and requires immediate assistance from rescue authorities or other vessels. It is the highest priority radio signal.',
      },
      {
        heading: 'Authority for Distress',
        content: 'Only the person in command (captain/skipper) of the vessel has the authority to declare a distress situation and send a Mayday. The person in command must make this decision.',
      },
      {
        heading: 'Initial Distress Call',
        content: 'The distress call begins with "Mayday" spoken THREE times, followed by "This is" and the vessel name spoken THREE times. This ensures recognition of the distress situation.',
      },
      {
        heading: 'Distress Message Content',
        content: 'The Distress message includes: (1) "Mayday" (once), (2) Vessel name and call sign, (3) Position, (4) Nature of distress, (5) Type and number of persons on board, (6) Assistance required.',
      },
      {
        heading: 'Seelonce Mayday',
        content: '"Seelonce Mayday" (Silence Mayday) is the command used by the vessel in distress to order all other stations into radio silence except those directly involved in the rescue.',
      },
      {
        heading: 'Seelonce Distress',
        content: '"Seelonce Distress" is used by stations OTHER than the vessel in distress (e.g., Coast Guard Radio or a rescue ship) to impose silence on non-essential traffic.',
      },
      {
        heading: 'Seelonce Feenee',
        content: '"Seelonce Feenee" (Silence Fini - meaning "Silence Finished") means the distress situation has been cancelled and normal radio service may resume.',
      },
      {
        heading: 'Responding to DSC Distress Alert',
        content: 'When receiving a DSC Distress alert, DO NOT immediately transmit a voice acknowledgement. Wait for Coast Guard Radio to acknowledge first, then offer assistance only if requested.',
      },
      {
        heading: 'Mayday Relay',
        content: 'A vessel relaying a Mayday call for another vessel says "Mayday Relay" three times followed by the distressed vessel\'s details. It should NOT be preceded by a DSC alert.',
      },
      {
        heading: 'Distress Control',
        content: 'Control of distress traffic remains with the vessel in distress unless they delegate it (usually to Coast Guard Radio). All other stations must follow the controlling station\'s directions.',
      },
    ],
  },
  7: {
    title: 'Urgency Communications',
    keyPoints: [
      {
        heading: 'Pan Pan Definition',
        content: '"Pan Pan" is the urgency signal indicating a very urgent message concerning the safety of a ship, aircraft, person, or vehicle. It is below Distress in priority but above Safety.',
      },
      {
        heading: 'When to Use Pan Pan',
        content: 'Use Pan Pan when there is an urgent situation that is serious but does not require IMMEDIATE assistance. Examples: serious illness requiring immediate medical advice, propulsion problems, water in the hull.',
      },
      {
        heading: 'Pan Pan Transmission',
        content: 'The urgency call begins with "Pan Pan" spoken THREE times, followed by "All Stations", then "This is" and your vessel name.',
      },
      {
        heading: 'Listening Requirement',
        content: 'All stations hearing a Pan Pan signal must continue to listen for at least 3 minutes and not transmit on that channel unless directly involved in the urgency traffic.',
      },
      {
        heading: 'Priority Level',
        content: 'Urgency traffic has priority over all communications except Distress. All routine traffic must cease, and stations must listen without transmitting.',
      },
      {
        heading: 'Addressed to All Stations',
        content: 'Pan Pan calls are normally broadcast to "All Stations" on Channel 16 to ensure all nearby vessels and Coast Guard receive the urgency information.',
      },
      {
        heading: 'Pan Pan Cancellation',
        content: 'To end urgency traffic, the vessel broadcasts "Urgency Ended" addressed to All Stations on the same channel used for the initial Pan Pan.',
      },
      {
        heading: 'Cancellation Scope',
        content: 'The urgency cancellation must be addressed to All Stations (same as the initial call) to ensure all listening vessels know the urgency situation is over.',
      },
      {
        heading: 'Pan Pan vs Mayday',
        content: 'Pan Pan = serious safety issue, Coast Guard notified, assistance likely needed, some time available. Mayday = grave danger, immediate assistance required NOW.',
      },
      {
        heading: 'Urgent Medical Advice',
        content: 'Pan Pan is commonly used to request urgent medical advice. Contact Coast Guard Radio with patient details - they can connect you with medical personnel.',
      },
    ],
  },
  8: {
    title: 'Safety Communications',
    keyPoints: [
      {
        heading: 'Sécurité Definition',
        content: '"Sécurité" (pronounced "Say-cure-ee-tay") is the safety signal indicating an important navigational or meteorological warning that may affect other vessels.',
      },
      {
        heading: 'Safety Message Examples',
        content: 'Safety messages include: navigation hazards (wreck, debris), storms or severe weather, ice warnings, unusual sea conditions, or other dangers to navigation.',
      },
      {
        heading: 'Sécurité Transmission',
        content: 'The safety call begins with "Sécurité" spoken THREE times, followed by "All Stations", then your station identifier and the warning information.',
      },
      {
        heading: 'Channel 16 Initial Call',
        content: 'The initial Safety call to get attention is made on Channel 16 (156.800 MHz). This alerts all stations that important safety information will follow.',
      },
      {
        heading: 'Working Channel for Message',
        content: 'After the initial call on Channel 16, switch to a suitable working channel (commonly Channel 6) to broadcast the detailed safety information.',
      },
      {
        heading: 'Broadcast Nature',
        content: 'Safety calls are broadcasts to All Stations and do NOT expect a reply. They inform all listening vessels of potential hazards.',
      },
      {
        heading: 'Priority Level',
        content: 'Safety traffic has priority over routine communications but is below Distress and Urgency. Routine traffic must stand by for safety information.',
      },
      {
        heading: 'Why No DSC Safety Alert',
        content: 'It is recommended to NOT send a DSC Safety alert because it would alert ALL vessels within DSC range, but the safety information is usually only relevant to a small geographic area. Use voice on Channel 16 instead.',
      },
      {
        heading: 'Channel 6 Designation',
        content: 'Channel 6 (156.300 MHz) is designated as the Safety and Intership communications channel. It\'s the standard working channel for detailed safety information.',
      },
      {
        heading: 'Listening Requirement',
        content: 'Although stations must monitor for safety traffic, a minimum listening period is not specified (unlike Urgency which requires 3 minutes).',
      },
    ],
  },
  9: {
    title: 'Other GMDSS Equipment',
    keyPoints: [
      {
        heading: 'EPIRB Overview',
        content: 'An EPIRB (Emergency Position Indicating Radio Beacon) is a device that transmits a distress signal to rescue authorities via satellite when activated.',
      },
      {
        heading: 'EPIRB Frequency',
        content: 'Modern EPIRBs transmit on 406 MHz, which is detected by the COSPAS-SARSAT satellite system. This provides accurate vessel location to rescue services.',
      },
      {
        heading: 'Category 1 EPIRB',
        content: 'Category 1 EPIRBs can activate automatically when immersed in saltwater (e.g., vessel sinking). Manual activation is also available. They include GPS location data.',
      },
      {
        heading: 'EPIRB Registration',
        content: 'All EPIRBs must be registered with the Canadian Beacon Registry so rescue authorities can identify the vessel when an alert is received.',
      },
      {
        heading: 'EPIRB Homing Signal',
        content: 'After satellite detection, the EPIRB transmits on 121.5 MHz for homing - this allows rescue aircraft to locate the actual beacon and distressed vessel.',
      },
      {
        heading: 'SART Overview',
        content: 'A SART (Search and Rescue Transponder) is a radar transponder that responds to rescue ship and aircraft radar signals, making the vessel visible on radar displays.',
      },
      {
        heading: 'SART Frequency',
        content: 'SART responds specifically to X-band 9 GHz radar, which is standard on rescue vessels and aircraft.',
      },
      {
        heading: 'SART Radar Pattern',
        content: 'When activated, a SART displays as 12 distinctive blips in a line on the rescuer\'s radar screen, making it immediately recognizable as a SART transmission.',
      },
      {
        heading: 'SART Range Closure',
        content: 'As the rescue vessel approaches the SART, the 12 blips gradually form into arcs, then eventually appear as complete circles on the radar display.',
      },
      {
        heading: 'NAVTEX System',
        content: 'NAVTEX (Navigational Telex) operates on 518 kHz and provides automated broadcasts of maritime weather forecasts, gale warnings, navigational warnings, and safety information.',
      },
    ],
  },
  10: {
    title: 'Supplementary Reference',
    subTopics: {
      antennas: {
        title: 'Propagation & Antennas',
        keyPoints: [
          {
            heading: 'VHF Line-of-Sight Propagation',
            content: 'VHF radios operate in the 156–162 MHz band. Usable range is "line of sight" — signals reflect off land masses and bend around obstacles somewhat, giving slightly better range than pure line of sight. Typical ship-to-ship range is 15–20 miles. Shore stations on tall towers achieve considerably greater range.',
          },
          {
            heading: 'Transmitter Power',
            content: 'Maximum permitted VHF power is 25 watts, sufficient to reach any vessel within line-of-sight range. All marine radios must have a means to reduce power to 1 watt for nearby communications. Always use minimum power necessary — this lets distant stations share the same channel without interference.',
          },
          {
            heading: 'Antenna Gain Ratings',
            content: 'VHF antennas come in 3 dB, 6 dB, and 9 dB gain ratings. A dB is a measure of relative power — 3 dB equals a doubling of power. Higher gain antennas focus the signal more tightly toward the horizon but become less effective when the vessel heels or rolls.',
          },
          {
            heading: 'Antenna Radiation Pattern',
            content: 'Antennas radiate the strongest signal at right angles to the element and little or no signal off the ends. The pattern looks like a doughnut with the antenna sticking up through the hole.',
          },
          {
            heading: '3 dB Antennas (Sailboats)',
            content: '3 dB antennas are typically stainless steel rods, about 1 metre (3 feet) long and lightweight. They have a very broad radiation pattern — good signal up to 80° above or below horizontal — which provides reliable performance even when heeled. Usually mounted at the masthead on sailboats. The high mounting point compensates for lower gain.',
          },
          {
            heading: '6 dB Antennas (Powerboats)',
            content: '6 dB gain antennas are generally used on powerboats. They achieve greater signal strength by limiting output to 35° above or below horizontal. The antenna should be carried vertically at all times for maximum range. Typically fibreglass tubes about 2.5 metres (8 feet) long.',
          },
          {
            heading: '9 dB Antennas',
            content: '9 dB gain antennas are available but rarely used. They are 4–7 metres (14–23 feet) long and considerably more expensive than 6 dB antennas.',
          },
        ],
      },
      ais: {
        title: 'Automatic Identification System (AIS)',
        keyPoints: [
          {
            heading: 'What Is AIS?',
            content: 'AIS is used by vessels primarily to identify position, type, speed, and direction of travel of nearby vessels for collision avoidance. Shore-based Vessel Traffic Systems (VTS) also use AIS to monitor vessel positions. AIS uses VHF radio signals on Channels 87B (161.975 MHz) and 88B (162.025 MHz).',
          },
          {
            heading: 'SOTDMA Technology',
            content: 'AIS uses Self-Organizing Time Division Multiple Access (SOTDMA) to minimize interference. Each minute is divided into 2,250 time slots. Each transponder announces the slot it will use for its next transmission and tracks recently announced slots to avoid conflicts.',
          },
          {
            heading: 'AIS Range and Detection',
            content: 'Since AIS uses channels in the Marine VHF band, signal range is similar to VHF voice communications. AIS can often detect targets hidden from radar by intervening land. Shore-based repeater stations can expand coverage beyond line of sight.',
          },
          {
            heading: 'Class A Transponders',
            content: 'Class A transponders are required on SOLAS vessels over 300 GT and passenger vessels on international voyages. They include a GPS receiver, tuneable transmitter, two AIS receivers, and a Channel 70 DSC receiver. They transmit at 12.5 watts and include a text display and keyboard for voyage data entry and text messaging.',
          },
          {
            heading: 'Class B Transponders',
            content: 'Class B transponders are simpler, intended for voluntarily equipped vessels like pleasure craft. They transmit at only 2 watts (vs. 12.5W for Class A). They do not transmit navigation status or voyage details. Data output is typically fed to a chart display or radar.',
          },
          {
            heading: 'AIS Receivers (No Transmit)',
            content: 'Receive-only AIS units are also available. If you have a receive-only unit, you will be aware of other vessels, but your vessel will NOT appear on their AIS displays. Some products called "AIS radar" are actually just AIS receivers with a graphical LCD display.',
          },
          {
            heading: 'AIS Message Types',
            content: 'AIS transponders transmit two primary message types: Position Reports (position, speed, direction — frequently changing data) and Static/Voyage Data (vessel details and current voyage info). Navigational Status and ship/cargo type are selected from predefined options. The reported position is the location of the vessel\'s GPS antenna.',
          },
          {
            heading: 'AIS Display',
            content: 'AIS data is shown as icons on electronic chart or radar screens — typically small triangles indicating direction of travel with lines showing speed. Most systems continuously calculate time and distance of closest approach (TCPA and CPA) and can provide alarms if a target will come within a set distance.',
          },
        ],
      },
      batteries: {
        title: 'Batteries & Wiring',
        keyPoints: [
          {
            heading: 'Lead Acid Battery Types',
            content: 'Power for electronic equipment on small vessels is almost universally supplied by lead acid storage batteries. Three types: flooded (liquid electrolyte), gel (spill-proof, used on PWCs and vessels that tip), and AGM (Absorbed Glass Mat — fibreglass mats saturated with electrolyte, more rugged, spill-proof and leak-proof).',
          },
          {
            heading: 'Charging Profiles',
            content: 'AGM and gel batteries require different charging voltages than conventional flooded batteries — charging profiles must be set to match the battery type. Charge rate should not exceed 20% of the ampere-hour capacity. Use a charger that tapers off as full charge is reached. Constant trickle charging and rapid charging can be harmful. Connect the charger to battery terminals before connecting to 120V power.',
          },
          {
            heading: 'Battery Maintenance',
            content: 'Store in a cool, dry, well-ventilated area. Keep terminals clean and connections secure — apply petroleum jelly to prevent corrosion. In flooded batteries, maintain electrolyte level about 1 cm above the plates using only distilled water (never add acid). Check charge with a hydrometer (flooded only) or voltmeter. If stored long-term, maintain in a fully charged state.',
          },
          {
            heading: 'Battery Safety Precautions',
            content: 'Battery must be securely restrained to prevent movement and protected from falling objects. The compartment must be ventilated to prevent accumulation of explosive gases during charging. No smoking near batteries, especially during charging. Electrolyte is extremely corrosive — handle with care.',
          },
          {
            heading: 'VHF Antenna Cable',
            content: 'VHF antenna installations require 50 ohm impedance coax cable. The most commonly used types are RG-8X (preferable) or RG-58AU.',
          },
          {
            heading: 'Wiring Maintenance',
            content: 'Keep wiring secure and protected from chafing. Connections must be kept clean and tight. Use soldered or properly crimped connections. Replace failed fuses only with equal-value replacements — an oversize fuse could cause further damage. Repetitive fuse failures indicate a serious problem. Periodically check the antenna cable and connections.',
          },
        ],
      },
      channels: {
        title: 'VHF Channel Reference',
        keyPoints: [
          {
            heading: 'Channel 16 — Distress, Safety & Calling',
            content: '156.800 MHz. The international distress and calling channel. All vessels must monitor this channel when their radio is on. Used for initial contact and distress/safety communications. Switch to a working channel after establishing contact.',
          },
          {
            heading: 'Channel 70 — Digital Selective Calling (DSC)',
            content: '156.525 MHz. Dedicated to DSC digital alerts. Not used for voice. DSC-equipped radios have a dedicated receiver that continuously monitors this channel for distress alerts, urgency alerts, and routine digital calls.',
          },
          {
            heading: 'Channel 06 — Safety (Intership)',
            content: 'Designated for intership safety communications. Used as the working channel for SÉCURITÉ safety messages after the initial call on Channel 16.',
          },
          {
            heading: 'Channel 13 — Navigation Safety (Bridge-to-Bridge)',
            content: 'Used for navigation safety — bridge-to-bridge communications between vessels. Ships use this to coordinate passing arrangements and traffic situations. Low power (1 watt) should be used.',
          },
          {
            heading: 'Channels 68, 69, 71, 72, 78A — Recreational Intership',
            content: 'These channels are designated for recreational vessel intership communications in Canada. Use these for non-commercial conversations between pleasure craft.',
          },
          {
            heading: 'Channel 09 — Alternate Calling',
            content: 'Can be used as an alternative calling channel for non-distress calls. Some areas designate this as a boater calling channel to reduce congestion on Channel 16.',
          },
          {
            heading: 'WX Channels — Weather',
            content: 'Dedicated receive-only channels for continuous weather broadcasts from Environment Canada and NOAA. Channels WX1 through WX4 are most commonly used. Coverage varies by region.',
          },
          {
            heading: 'Simplex vs. Duplex Channels',
            content: 'Simplex channels use a single frequency for transmitting and receiving — suitable for ship-to-ship. Duplex channels use two frequencies (one transmit, one receive) and are used for ship-to-shore communications through coast stations, sometimes with telephone connections.',
          },
        ],
      },
      mfhf: {
        title: 'MF/HF & Single Sideband',
        keyPoints: [
          {
            heading: 'What Is SSB?',
            content: 'Single Sideband (SSB) suppressed carrier is a highly effective form of modulation. It makes a radio signal appear up to eight times stronger than AM. SSB is used on MF/HF maritime voice frequencies. FM modulation is used on VHF.',
          },
          {
            heading: 'MF Band (Medium Frequency)',
            content: 'The MF band covers 2–2.85 MHz. Radio waves in this band follow Earth\'s curvature (ground wave propagation), giving usable ranges of 60 miles by day and up to 200 miles at night.',
          },
          {
            heading: 'HF Band (High Frequency / Shortwave)',
            content: 'The HF range covers eight bands between 4–26 MHz. At higher frequencies, ground wave becomes less effective and we rely on sky waves reflected by ionized atmospheric layers. By selecting appropriate times and frequencies, worldwide communication is possible day and night.',
          },
          {
            heading: 'Skip Zones',
            content: 'For any frequency, there is generally a "skip zone" — an area where no signals can be heard — between the limit of usable ground wave coverage and where the first reflected sky wave signals arrive. The height and density of ionized layers vary throughout the day, allowing higher frequencies during daytime and lower frequencies at night.',
          },
          {
            heading: 'MF/HF Services',
            content: 'MF and HF bands can be used for voice between vessels or vessel-to-shore, with some shore stations providing telephone connections. Broadcast radio, telex, and email services are also available. MF/HF radios generally use frequency numbers (e.g., 2182 kHz) rather than channel numbers.',
          },
          {
            heading: 'Amateur Radio for Ocean Cruising',
            content: 'Most maritime MF/HF transceivers also cover amateur bands. Many ocean cruisers obtain an amateur licence for the 2-metre band (144 MHz VHF) and MF/HF bands to keep in touch with other cruisers and make phone patches. Email services are also available on amateur bands. A basic amateur licence allows VHF operation without Morse Code knowledge.',
          },
        ],
      },
      alternatives: {
        title: 'Alternative Radio Services',
        keyPoints: [
          {
            heading: 'General Radio Service (GRS / Citizens\' Band)',
            content: 'GRS, commonly known as Citizens\' Band (CB), provides low-cost communication with minimal red tape. Good for groups of vessels travelling together or direct communication with an associated land station. Drawbacks: very limited power and range, no telephone service, Coast Guard does not monitor GRS channels, and channels tend to be crowded with undisciplined calling.',
          },
          {
            heading: 'Amateur Radio (Ham Radio)',
            content: 'Allows communication over very great distances — messages can be transmitted worldwide through the amateur network. VHF operation on the 2-metre band (144 MHz) is popular among boating hams. MF/HF equipment is also available. Drawbacks: HF equipment has large power requirements and is expensive, obtaining the licence is harder than ROC(M), and no emergency agencies monitor amateur frequencies.',
          },
          {
            heading: 'Family Radio Service (FRS)',
            content: 'FRS is an ultra-high frequency (UHF) service at 460 MHz intended for very short range communication — typically under one kilometre. No licence required. Can be used on board or ashore. No emergency agencies monitor this frequency.',
          },
          {
            heading: 'General Mobile Radio Service (GMRS)',
            content: 'GMRS is an unlicensed personal radio service with higher power than FRS, claiming a range of 13 kilometres. GMRS and FRS share seven channels. Canadian FRS/GMRS radios can be used in the United States (same frequencies), but NOT in other countries which use different frequencies for similar services.',
          },
          {
            heading: 'Key Comparison',
            content: 'Marine VHF is the only radio service monitored by Coast Guard and rescue agencies. GRS, amateur, FRS, and GMRS are supplementary services — useful for group coordination and convenience, but never a replacement for marine VHF for safety. Always ensure your marine VHF is operational and monitoring Channel 16.',
          },
        ],
      },
    },
  },
};
