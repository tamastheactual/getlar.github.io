---
title: Scalable Reinforcement Learning in Multi-Agent Environments
pubDate: 07/29/2024 20:00
lastModDate: 08/02/2024 16:00
author: "Tamás Takács"
tags:
  - reinforcement learning
  - marl
  - paper
imgUrlLg: '../../assets/project/marl/RL.png'
imgUrlSm: '../../assets/project/marl/RL.png'
description: Novel reinforcement learning algorithms often face scalability and compatibility issues in multi-agent environments due to their optimization for single-agent settings. The lack of standardized methods for adaptation restricts their broader applicability, especially when dealing with rapidly changing numbers of controllable entities and massive scaling. Challenges include credit assignment, extensive memory usage, and increased computational time, leading to slow, destabilized training and suboptimal resource utilization. We propose a hybrid architecture, combining monolithic and distributed approaches, resulting in a 30-times reduction in model size and learning basic skills 24 times faster with 600-times fewer training examples compared to related works in the same environment. We also introduce trajectory separation, achieving a 3-times speed increase in training convergence.
layout: '../../layouts/ProjectPost.astro'
---

# <u>Scalable Reinforcement Learning in Multi-Agent Environments</u>

<p class="text-xl font-bold">
  Tamás Takács<sup>1</sup>,<span style="margin-right: 10px;"></span>
  Gergely Magyar<sup>1</sup>,<span style="margin-right: 5px;"></span>
  &<span style="margin-right: 5px;"></span>
  László Gulyás<sup>2</sup>
</p>

<p>
  <sup>1</sup> <em>MSc Students @ ELTE, Department of Artificial Intelligence</em>
</p>

<p>
  <sup>2</sup> <em>Associate Professor @ ELTE, Department of Artificial Intelligence</em>
</p>

<p>
  <u><a class="font-bold" href="/" title="Paper Link" target="_blank">[Paper]</a></u>
  <span style="margin-right: 5px;"></span>
  <u><a class="font-bold" href="https://github.com/MagmaMultiAgent/MagMA" title="Code Link" target="_blank">[Code]</a></u>
  <span style="margin-right: 5px;"></span>
  <u><a class="font-bold" href="/projects/MagMA.pdf" title="Poster Link" target="_blank">[Poster]</a></u>
</p>

<hr class="border-1 border-t border-tcotta my-0" />

## <u>Abstract</u>

Novel reinforcement learning algorithms often face scalability and compatibility issues in multi-agent environments due to their optimization for single-agent settings. The lack of standardized methods for adaptation restricts their broader applicability, especially when dealing with rapidly changing numbers of controllable entities and massive scaling. Challenges include credit assignment, extensive memory usage, and increased computational time, leading to slow, destabilized training and suboptimal resource utilization. We propose a hybrid architecture, combining monolithic and distributed approaches, resulting in a <span class="font-extrabold" style="color:var(--tcotta)">30-times reduction in model size</span> and  <span class="font-extrabold" style="color:var(--tcotta)">learning basic skills 24 times faster with 600-times fewer training examples </span>compared to related works in the same environment. We also introduce  <span class="font-extrabold" style="color:var(--tcotta)">trajectory separation, achieving a 3-times speed increase </span> in training convergence. Our <span class="font-extrabold" style="color:var(--tcotta)">M-PPO-based </span> hybrid model achieves:

* <span class="font-extrabold">a performance-based environment</span>
* <span class="font-extrabold">separated agent trajectories</span>
* <span class="font-extrabold">separated reward, advantage, probability and entropy calculation</span>
* <span class="font-extrabold">reinforced positive behavior in early training</span>

![Lux Env](../../assets/project/marl/posterme.jpg)

*Figure 2: <span class="font-extrabold">Me performing at a poster exhibition on a three day Machine Learning Conference in Budapest, Hungary (Magyar Machine learning Találkozó). The event was hosted by [<span class="font-extrabold" style="color:var(--tcotta)">[HUN-REN]</span>](https://hun-ren.hu/) in collaboration with  [<span class="font-extrabold" style="color:var(--tcotta)">[SZTAKI]</span>](https://sztaki.hun-ren.hu/).</span>*

<hr class="border-1 border-t border-tcotta my-0" />


## <u>Introduction</u>

A MARL solution can be conceptualized along a spectrum of organizational paradigms [<span class="font-extrabold" style="color:var(--tcotta)">[Piccoli 2023]</span>](https://arxiv.org/pdf/2302.12308). At one end of the spectrum, the <span class="font-extrabold">single-brain approach</span> centralizes decision-making, where a collective of agents is treated as a single entity. In this model, a global observation is used to generate a unified trajectory, and rewards are distributed based on collective outcomes, which can inadvertently reinforce negative behaviors. In contrast, a <span class="font-extrabold">hybrid model</span> utilizes local information from all agents to generate a single trajectory but incorporates a global reward system.

Our research improves on this hybrid model by  <span class="font-extrabold">allocating rewards to individual agents or groups based on their specific contributions</span>, thus creating a performance-based environment that operates at the individual or small group level. This approach involves dividing the environment's trajectories among agents or groups, allowing for the calculation of rewards, log probabilities, value estimates, advantages, and entropy for each unit or group. This method  <span class="font-extrabold">bootstraps the learning process</span> by ensuring that rewards only reinforce positive behaviors early on. At the other end of the spectrum is the fully multi-agent approach, where each entity interacting with the environment is treated as an independent learning agent. This significantly complicates the learning process by creating trajectories of varied lengths, as entities may enter or exit the scene, or be destroyed. Consequently, gathering a consistent amount of experience for each entity becomes challenging, especially when some entities may only exist in the environment for a fraction of the time compared to others. This situation leads to computational inefficiencies and data sparsity. Our solution effectively addresses these challenges by offering a framework that  <span class="font-extrabold">mitigates the issues associated with both the single-brain and fully multi-agent approaches</span>. Our research also focuses on evaluating these methodologies in dynamically changing environments and offers insights into addressing computational and emergent intelligence challenges without heavy reliance on domain-specific constraints or rigid rules.

<hr class="border-1 border-t border-tcotta my-0" />

## <u>Environment</u>

The Lux AI Environment represents a 2D grid platform tailored for <span class="font-extrabold">Multi-Agent Reinforcement Learning (MARL) research</span> [<span class="font-extrabold" style="color:var(--tcotta)">[Chen et al. 2023]</span>](https://arxiv.org/abs/2301.01609), designed to tackle challenges in multi-variable optimization, resource acquisition, and allocation within a competitive 1v1 setting. Beyond optimization, proficient agents are tasked with adeptly analyzing their adversaries and formulating strategic policies to gain a decisive advantage. The environment is fully observed by all agents. For further information on the environment, visit the official competition documentation [<span class="font-extrabold" style="color:var(--tcotta)">[Tao, Pan, et al. 2023a]</span>](https://www.kaggle.com/competitions/lux-ai-season-2).

![Lux Env](../../assets/project/marl/lux.png)

*Figure 1: <span class="font-extrabold">A visual representation of the grid environment, generated from a specific seed.</span>*

![Lux Env](../../assets/project/marl/lux2.png)

*Figure 2: <span class="font-extrabold">Simplified environment loop of the Lux AI Environment. An episode starts with the Bidding Phase and ends after 1000 steps. The player with the most lichen collected wins.</span>*

<hr class="border-1 border-t border-tcotta my-0" />

## <u>What is Trajectory Separation?</u>

Trajectory separation is a technique used to <span class="font-extrabold">improve credit assignment in multi-agent environments</span> by tracking rewards, critic values, actions, and entropies separately for each entity or group of entities. Instead of aggregating rewards into a single global value, it breaks down each environment step into multiple distinct training examples. This approach allows for more precise attribution of rewards to specific actions, reducing the risk of skewed reward attribution that can occur when dealing with many entities. As a result, it <span class="font-extrabold">enhances the accuracy of backpropagation</span>, reinforcing beneficial behaviors and correcting detrimental ones more effectively.

![Trajectory Separation Reward](../../assets/project/marl/rewards.png)

*Figure 3: <span class="font-extrabold"> Showing the difference between global rewards (left) and rewards distributed into groups using trajectory separation (right).</span>*

![Trajectory Separation LogProbs](../../assets/project/marl/trajsep.png)

*Figure 4: <span class="font-extrabold">  Demonstrating policy loss calculation with the extended dimension. The matrices on the image represent a mini-batch consisting of 3 environment steps. Inactive groups are marked.</span>*

<hr class="border-1 border-t border-tcotta my-0" />

## <u>Global Feature Extractor</u>

We developed a global feature extractor to learn a comprehensive mapping from environmental states to actions. This approach allows us to capture a unified behavior pattern, enhanced by the individual actions of agents, thereby achieving emergent collaborative intelligence.

![Global Feature Extractor](../../assets/project/marl/featureextr.png)

*Figure 5: <span class="font-extrabold"> The structure of the final feature extractor and the critic and actor heads utilized on top of M-PPO.</span>*

![Backpropagation](../../assets/project/marl/backprop.png)

*Figure 6: <span class="font-extrabold"> Our novel trajectory separation method achieves distributed rewards by producing one trajectory per entity or cluster and calculating loss based on individual performance.</span>*

<hr class="border-1 border-t border-tcotta my-0" />

## <u>Results</u>

In our study, <span class="font-extrabold">we compared our results with other competition submissions, conducted experiments on various credit assignment setups, and performed ablation studies.</span>

![Results for Trajectory Ratios](../../assets/project/marl/result.png)

*Figure 7: <span class="font-extrabold"> Results demonstrate the effectiveness of trajectory separation, revealing that higher agent-specific reward weights heavily improve performance. Episode Length indicates team survival duration, while Ice Transferred and Average Factory Alive reflect resource collection efficiency.</span>*

![Results for Comparison](../../assets/project/marl/result2.png)

*Figure 8: <span class="font-extrabold"> Table comparing the removal of separated components relevant to the advantage calculation. The metrics featured include the amount of ice transferred by units and the length of the episodes
in the evaluation phase following the last training cycle. The table also contains the observed environment steps needed until the model reaches the maximum episode length in the specified percentage of
evaluation environments. In addition to the test variants, the global and completely separate trajectory
variants are also present. Removing the separation of rewards and critic values caused a significant
performance decrease. Reward appears to be the most important component.</span>*

<hr class="border-1 border-t border-tcotta my-0" />

## <u>Citation</u>

Read the full paper for more details: <u><a class="font-bold" href="/" title="Paper Link" target="_blank">[Paper]</a></u>, and if you find this work informative please consider citing it:

<pre style="background-color: #2e2e2e; color: #ffffff; padding: 15px; border-radius: 5px; overflow-x: hidden; font-family: monospace; white-space: pre-wrap; word-wrap: break-word;">
  <code style="color: white; letter-spacing: 1px;">
@article{getlar2024,
  soon...
}
  </code>
</pre>

<hr class="border-1 border-t border-tcotta my-0" />