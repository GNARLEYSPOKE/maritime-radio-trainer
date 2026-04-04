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
        content: 'In addition to the operator\'s certificate (ROC(M)), the vessel must have a Radio Station Licence. The operator must carry the certificate; the vessel must carry the licence. A radio station licence will not be issued to anyone under 16 years old.',
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
        content: 'To legally operate a marine radio, you must have: (1) A valid ROC(M) certificate (operator must carry), (2) A Radio Station Licence (posted on the vessel), (3) MMSI number (for DSC-equipped vessels)',
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
        content: 'The Distress message includes: (1) "Mayday" (once), (2) Vessel name and call sign, (3) Position, (4) Nature of distress, (5) Type and number of persons on board, (6) Any assistance available.',
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
        heading: 'Securite Definition',
        content: '"Securite" (pronounced "Say-cure-ee-tay") is the safety signal indicating an important navigational or meteorological warning that may affect other vessels.',
      },
      {
        heading: 'Safety Message Examples',
        content: 'Safety messages include: navigation hazards (wreck, debris), storms or severe weather, ice warnings, unusual sea conditions, or other dangers to navigation.',
      },
      {
        heading: 'Securite Transmission',
        content: 'The safety call begins with "Securite" spoken THREE times, followed by "All Stations", then your station identifier and the warning information.',
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
};
