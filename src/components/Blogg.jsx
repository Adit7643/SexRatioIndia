import { React, useState } from "react";
import { Box, Typography, Paper, Container, List, ListItem, ListItemText, Grid, IconButton, Drawer } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { fontFamily, styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import sexRatio from "../assets/Untitled.png";
import img from "../assets/sex-ratio.webp";
import genImg from "../assets/download.jpeg";
import Lpu from "../assets/lpu.jpg";

// Styled Components
const BlogContainer = styled(Box)({
  display: "flex",
  background: "linear-gradient(to right, #ffecd2, #fcb69f)",
  padding: "20px",
});

const Sidebar = styled(Box)({
  width: "250px",
  position: "sticky",
  top: "20px",
  height: "100vh",
  padding: "20px",
  background: "white",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
});

const ContentArea = styled(Box)({
  flex: 1,
  padding: "20px",
});

const Section = styled(Paper)({
  padding: "20px",
  marginBottom: "20px",
  fontWeight: "300",
  boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
  borderRadius: "10px",
  background: "white",
});

const Image = styled("img")({
  height: "40vh",
  borderRadius: "10px",
  marginBottom: "20px",
});

// Enable smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

const Blogg = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const sections = [
    "Introduction",
    "What is Sex Ratio?",
    "The Alarming Numbers",
    "Root Causes",
    "Consequences",
    "How Can We Fix This?",
    "The Path Forward",
    "Call to Action",
  ];
  const Navigation = (
    <Box sx={{ width: "250px", padding: "30px", marginTop: "40px" }}>
      {sections.map((section, index) => (
        <Typography key={index} sx={{ fontWeight: "bold", mb: 1, fontFamily: "QuickSand" }}>
          <a href={`#${section.replace(/\s+/g, "-")}`} style={{ textDecoration: "none", color: "black" }}>
            {section}
          </a>
        </Typography>
      ))}
    </Box>
  );
  return (
    <BlogContainer>
      {/* Sidebar Navigation */}
      {isSmallScreen ? (
        <>
          <IconButton onClick={() => setOpen(!open)} sx={{ position: "fixed", top: "20px", left: "20px", zIndex: 1300 }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            {Navigation}
          </Drawer>
        </>
      ) : (
        <Sidebar>{Navigation}</Sidebar>
      )}

      {/* Main Content */}
      <ContentArea>
        <Section id="Project-Title" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src={Lpu} alt="LPU" />
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }} >
            Submitted by: Aditya Kumar
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            Registration Number: 12216011
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            Roll Number: 70
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            Section: KO057
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            Submitted to : Dr. Rahul Thapa
          </Typography>
        </Section>
        <Section id="Introduction">
          <Grid container spacing={4} alignItems="flex-start">
            {/* Image on the Left */}
            <Grid item xs={12} md={5}>
              <Image src={img} alt="Sex Ratio" style={{ width: "100%", borderRadius: "8px" }} />
            </Grid>

            {/* Text on the Right */}
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, fontFamily: "QuickSand" }}>
                The Skewed Mirror: Unraveling the Complexities of India's Sex Ratio
              </Typography>
              <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
                India, a land of rich heritage, vibrant traditions, and immense cultural diversity, is grappling with a deeply concerning issue: a skewed sex ratio. This demographic imbalance, where the number of women is significantly lower than the number of men, is a reflection of long-standing societal preferences for sons over daughters. But what does this mean for the country, and why is this happening?

                In this blog, we will take a closer look at the root causes of this imbalance, its far-reaching consequences, and potential solutions that can help address this pressing issue. By breaking down the complexities of the skewed sex ratio into simpler terms, we aim to make this topic accessible and understandable for all.
              </Typography>
            </Grid>
            <Typography sx={{ paddingLeft: "30px", fontFamily: "QuickSand", fontWeight: "500" }}>

              The implications of a distorted sex ratio extend beyond mere numbers; they shape the very fabric of society, influencing social dynamics, economic stability, and overall demographic patterns. A disproportionate male-to-female ratio can lead to serious societal challenges, including increased gender-based violence, a decline in the workforce, and disruptions in marriage patterns.

              Understanding the factors contributing to this disparity—such as cultural biases, economic pressures, and outdated patriarchal norms—is the first and most crucial step toward fostering a more balanced and equitable society. By addressing these deep-seated issues, we can work collectively towards building a future where every individual, regardless of gender, is valued equally and has the opportunity to thrive.
            </Typography>
          </Grid>
        </Section>


        <Section id="What-is-Sex-Ratio?">
          <Grid container spacing={2} alignItems="center">

            <Grid item xs={12} md={6}>
              <Image src={genImg} sx={{ width: "100%" }} alt="Sex Ratio Concept" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ fontWeight: "bold", fontFamily: "QuickSand", mb: 2 }}>
                What is Sex Ratio?
              </Typography>
              <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
                The sex ratio is a simple concept: it measures the number of females per 1,000 males in a population.
                In a natural scenario, slightly more boys are born than girls (around 105 males per 100 females)
                because male infants are biologically more vulnerable. However, in India, the sex ratio is skewed,
                meaning there are far fewer girls than there should be. This imbalance is not natural—it’s the result
                of human choices, deeply rooted in cultural, economic, and social factors.
              </Typography>
            </Grid>
          </Grid>
        </Section>

        <Section id="The-Alarming-Numbers" >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: "QuickSand" }}>
            The Alarming Numbers: A Statistical Snapshot
          </Typography>
          <Image src={sexRatio} alt="Graph on Sex Ratio" />
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            India’s census, conducted every 10 years, provides a clear picture of the sex ratio. The 2011 census revealed a child sex ratio (ages 0-6) of 919 girls per 1,000 boys, down from 927 in 2001. While some states have shown minor improvements, the overall trend remains worrying. States like Haryana, Punjab, and Rajasthan have some of the lowest ratios, often below 900 girls per 1,000 boys. These numbers tell a story of discrimination that begins even before a girl is born.
          </Typography>
        </Section>

        <Section id="Root-Causes" >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: "QuickSand" }}>
            Why Does This Happen? The Root Causes
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            The skewed sex ratio is caused by a complex mix of cultural, economic, and social issues. some of them are:
          </Typography>
          <List  >
            <ListItem>
              <ListItemText primary="Son Preference" secondary="Son preference is deeply entrenched in many parts of India, driven by a complex mix of cultural, religious, and economic factors. Traditionally, sons are viewed as essential for carrying forward the family name, performing religious rituals, and inheriting property. This belief system, deeply rooted in societal norms, has contributed to a long-standing bias against daughters. Moreover, in a country where social security systems are weak, sons are often seen as the primary source of financial support for aging parents, reinforcing the idea that having a male child ensures economic security in the future. Additionally, the dowry system, despite being legally banned, continues to exert pressure on families, making daughters seem like a financial burden. The expectation that a bride’s family must provide money or gifts to the groom’s family further discourages the preference for female children. These combined factors have led to a skewed sex ratio, highlighting the urgent need for societal change and gender equality initiatives."
                sx={{ fontFamily: "QuickSand", fontWeight: "500" }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Socio-Economic Factors: A Major Cause of Declining Sex Ratio" secondary="The declining sex ratio in India is significantly influenced by socio-economic factors that reinforce gender bias and discrimination.

Poverty plays a crucial role in this issue, as financially struggling families often perceive sons as economic assets who can contribute to household income and provide long-term security. In contrast, daughters are often seen as a financial burden due to societal expectations surrounding marriage and dowry, which can lead to sex-selective practices.

Lack of Education further exacerbates the problem. Low literacy rates, especially among women, hinder awareness about gender equality and the long-term repercussions of a skewed sex ratio. Families with limited education may not fully understand the consequences of gender imbalance and continue to make choices that favor male children.

Lack of Women’s Empowerment in decision-making also contributes to the issue. In many patriarchal households, women have little control over reproductive choices, family planning, and financial matters. This limits their ability to challenge traditional son preference and prevent sex-selective practices. The absence of women’s voices in key decisions reinforces gender discrimination and perpetuates an imbalanced sex ratio.

Addressing these socio-economic challenges is essential to improving the sex ratio. Raising awareness through education, implementing economic support measures for families, and promoting gender equality through policy changes are necessary steps to combat this growing concern." sx={{ fontFamily: "QuickSand", fontWeight: "500" }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Regional Variations: The Uneven Distribution of India's Sex Ratio" secondary="The sex ratio in India is not uniform across the country; instead, it varies significantly from region to region, reflecting differences in social, economic, and cultural factors. Certain areas experience severe gender imbalances, while others show a more balanced demographic pattern.

In the northern states such as Haryana, Punjab, and Rajasthan, the sex ratio is among the lowest in the country. These regions are deeply influenced by strong patriarchal traditions, where son preference is deeply entrenched in society. Cultural norms that prioritize male heirs, coupled with economic factors such as the dowry system and reliance on sons for financial security, have led to widespread discrimination against female children. As a result, practices like sex-selective abortions and neglect of girl children continue to persist despite legal restrictions.

On the other hand, southern states like Kerala and Tamil Nadu present a more favorable sex ratio. A key reason for this is the relatively higher literacy rates in these regions, particularly among women. Education plays a crucial role in changing societal attitudes, making people more aware of the importance of gender equality. Additionally, women in these states tend to have greater economic and social empowerment, enabling them to participate in decision-making processes and challenge discriminatory practices.

These stark regional differences highlight the complex interplay of cultural traditions, education, and economic conditions in shaping India's sex ratio. Addressing this imbalance requires region-specific strategies that focus on empowering women, improving access to education, and enforcing laws that protect the rights of the girl child."
                sx={{ fontFamily: "QuickSand", fontWeight: "500" }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sex-Selective Abortions" secondary="Advances in medical technology, such as ultrasound machines, allow families to know the sex of a baby before birth. While this technology is meant for medical purposes, it is often misused for sex-selective abortions. This practice, though illegal under the Pre-conception and Pre-natal Diagnostic Techniques (PCPNDT) Act, continues due to weak enforcement." sx={{ fontFamily: "QuickSand", fontWeight: "500" }} />
            </ListItem>
          </List>
        </Section>

        <Section id="Consequences">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: "QuickSand" }}>
            The Consequences: A Ripple Effect Through Society
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            The skewed sex ratio doesn’t just affect women—it impacts entire communities and the nation as a whole. Here’s how:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Demographic Imbalance: A Shrinking Pool of Women" secondary="A declining sex ratio leads to a significant demographic imbalance, resulting in a shortage of women in society. As the number of women decreases, many men struggle to find marriage partners, leading to rising social tensions and instability. This scarcity fuels unethical practices such as human trafficking, forced marriages, and the commodification of women. In regions with highly skewed sex ratios, women are often subjected to greater exploitation and reduced autonomy. The long-term consequences include disrupted family structures and a decline in overall societal harmony.."></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Violence Against Women: A Cycle of Abuse" secondary="A skewed sex ratio reinforces gender discrimination, making women more vulnerable to various forms of violence. When society perceives women as less valuable, it becomes easier to justify harmful practices such as domestic abuse, sexual harassment, and even honor killings. The lack of women’s autonomy and economic independence further worsens their situation, trapping them in cycles of abuse. In regions with fewer women, crimes like bride trafficking and forced marriages also increase, as women are treated as commodities rather than individuals with rights and dignity."></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Social Instability: A Tainted Fabric" secondary="A declining sex ratio can have severe social consequences, disrupting traditional family structures and leading to widespread instability. In regions where women are scarce, men struggle to find partners, which can fuel frustration and social unrest. This imbalance has given rise to unethical practices such as bride trafficking, where women are bought and sold across states or even countries. Such practices not only violate human rights but also weaken the fabric of society, fostering exploitation, inequality, and a breakdown of moral and cultural values."></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Economic Impact: A Lost Potential" secondary="A declining sex ratio negatively impacts economic growth by limiting women's participation in the workforce. When girls are denied education and career opportunities due to gender bias, the country loses a significant portion of its potential labor force. Women contribute to diverse sectors, from agriculture to technology, and their absence slows innovation, productivity, and overall development. Additionally, gender inequality in employment leads to lower household incomes, reinforcing cycles of poverty. A balanced workforce, where both men and women contribute equally, is essential for sustainable economic progress."></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText primary="Ethical Concerns: A Moral Dilemma" secondary="Sex-selective abortions pose profound ethical questions about the value and dignity of human life. The idea of terminating a pregnancy solely based on gender reflects deep-seated biases and challenges fundamental moral principles. It raises concerns about human rights, gender equality, and the right to life. If society normalizes such practices, it reinforces discrimination and devalues the existence of women. Addressing this issue requires not only legal action but also a shift in societal attitudes to uphold the intrinsic worth of every individual, regardless of gender."></ListItemText>
            </ListItem>
          </List>
        </Section>

        <Section id="How-Can-We-Fix-This?">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: "QuickSand" }}>
            How Can We Fix This? A Multifaceted Approach
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            Addressing the skewed sex ratio requires a comprehensive and sustained effort. Here are some key solutions:
          </Typography>

          <List>
            <ListItem>
              <ListItemText
                primary="Strengthening Legal Frameworks"
                secondary="Strict enforcement of the PCPNDT Act is crucial to prevent the misuse of medical technology for sex determination. Additionally, anti-dowry laws must be rigorously implemented to dismantle a system that devalues daughters and contributes to gender-based discrimination."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Empowering Women"
                secondary="Investing in girls’ education is fundamental to changing societal attitudes and breaking the cycle of gender bias. Furthermore, providing women with access to economic opportunities, leadership roles, and financial independence will help elevate their status within society and the family."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Raising Awareness"
                secondary="Public campaigns play a vital role in educating communities about the value of girls and the harmful effects of sex-selective practices. Engaging religious leaders, educators, and media figures can help spread positive narratives that challenge long-standing cultural norms."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Improving Healthcare Access"
                secondary="Ensuring affordable and accessible prenatal care can significantly reduce the inclination toward sex-selective abortions. Additionally, mental health support and counseling services should be made available for women who experience pressure or distress due to gender-based expectations."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Engaging Men and Boys"
                secondary="Promoting gender equality starts with educating men and boys on the importance of respecting women and sharing responsibilities within households. Encouraging them to actively participate in childcare and family duties can help dismantle rigid gender roles and foster a more equitable society."
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Data Collection and Research"
                secondary="Regular monitoring of sex ratio trends through surveys and census data is essential to track progress. Researching the socio-cultural factors behind son preference will enable policymakers to develop targeted interventions and improve the effectiveness of existing programs."
              />
            </ListItem>
          </List>
        </Section>


        <Section id="The-Path-Forward">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            The Path Forward: A Collective Responsibility
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            The skewed sex ratio is not merely a governmental concern—it is a pressing societal issue that demands collective action. While laws and policies are crucial, real transformation occurs when individuals, families, communities, and institutions actively challenge deep-seated biases and work toward gender equality. Every person has a role in reshaping societal attitudes, ensuring that daughters are valued just as much as sons. Schools must instill the principles of equality from an early age, workplaces should promote fair opportunities, and media must portray strong, empowered female role models to shift public perception.

            India’s future prosperity is deeply linked to the well-being and empowerment of its women. A society that nurtures and supports its girls paves the way for economic growth, social stability, and national progress. By collectively breaking free from outdated traditions, investing in women’s education and opportunities, and fostering a culture of respect and equality, we can build a future where every girl is empowered to reach her full potential. Let’s work together to create a nation where gender does not determine worth or opportunity—because a balanced and just society benefits everyone.
          </Typography>
        </Section>

        <Section id="Call-to-Action">
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, fontFamily: "QuickSand" }}>
            Call to Action
          </Typography>
          <Typography sx={{ fontFamily: "QuickSand", fontWeight: "500" }}>
            Creating a balanced and equitable society starts with awareness and action. Every step taken, no matter how small, contributes to meaningful change. Here’s how you can make a difference:
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Educate Yourself and Others"
                secondary="Knowledge is power. Share this blog, initiate conversations, and spread awareness about the dangers of a skewed sex ratio and the importance of gender equality."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Support Organizations"
                secondary="Many NGOs work tirelessly to empower women and promote gender justice. Contribute by donating, volunteering, or amplifying their efforts to make a real impact."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Challenge Stereotypes"
                secondary="Social change begins at home and in our communities. Speak up against gender discrimination, question outdated traditions, and advocate for equal rights for girls and women."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Encourage Policy Implementation"
                secondary="Support government policies aimed at improving gender balance. Engage with local representatives to ensure the enforcement of laws against sex-selective practices and gender discrimination."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Be a Role Model"
                secondary="Lead by example—treat boys and girls equally, teach children about gender equality, and foster a culture of respect and empowerment in your home and workplace."
              />
            </ListItem>
          </List>
          <Typography sx={{ mt: 2, fontFamily: "QuickSand", fontWeight: "500" }}>
            Together, we can build a future where every child—regardless of gender—is valued, nurtured, and given the opportunity to thrive. Change begins with us.
          </Typography>
        </Section>

      </ContentArea>
    </BlogContainer>
  );
};

export default Blogg;
