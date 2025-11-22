import billWalshImage from '../assets/img/bill-walsh.png';
import loadBalancerImage from '../assets/img/load_balancer.png';
import smrMmrImage from '../assets/img/smr_mmr.png';

export const blogPosts = [
  {
    id: 1,
    title: "Multi-Master Replication: When Every Cashier Can Ring You Up",
    date: "3 Nov 2024",
    description: "How databases stay open for business even when one “counter” goes down",
    content: ` ## Imagine This

Imagine you’re at a big café on a busy weekend.

There’s just one cashier taking orders, and suddenly the line stretches out the door.

Everyone’s waiting, the cashier’s stressed, and customers are getting impatient.

That’s **Single Master Replication (SMR)** — one person doing all the writing (orders), while everyone else just watches.

<br>

Now, imagine the café installs multiple cash registers.

Each cashier can take orders at the same time, and all of them share the same menu and order list.

Even if one cashier’s system crashes, the others can keep taking orders — and the café stays open.

<br>

That’s **Multi-Master Replication (MMR)** in the world of databases.

Instead of one “main database” handling all writes, multiple databases (masters) can write and sync data with each other.

If one goes down, the others keep serving users — no downtime, no chaos. ☕

<br>

In practice, a service like Google Docs or Notion, where multiple people can edit the same document at once, likely relies on some form of MMR or conflict-resolution logic.

<br>

<br>

---

## How Multi-Master Replication Works

In real systems, MMR improves both availability and performance:

<br>

1. **High Availabiliy**: 
- If one data center or master node fails, others continue handling traffic. → Users don’t even notice downtime.

2. **LoadDistribution**: 
- Traffic and writes are spread out. → Prevents overload on a single master (no *“cashier meltdown”*).

3. **Global Access**: 
- Masters can be deployed in different regions. → Users connect to the nearest master for faster response.

<br>

**Examples:**

CouchDB, MySQL Galera Cluster, and Google Spanner all implement some form of MMR.

Global collaboration tools like Google Drive use similar logic so that two people editing the same file from Seoul and New York stay synced.

<br>

<br>

---
## Challenges You Can’t Ignore

**1. Conflict Resolution:**
- What if two masters update the same record at once?
→ You’ll need a rule: *“last write wins,”* timestamp-based priority, or custom logic.

<br>

**2. Network Latency:**
- Cross-region replication can slow things down.
→ Optimize by using regional clustering or async pipelines.

<br>

**3. Eventual Consistency:**
- Syncs are asynchronous.
→ It’s okay for data to be temporarily inconsistent, as long as it eventually matches.

<br>

**4. Operational Complexity:**
- More masters = more monitoring and failover logic.
→ Use tools like *Galera Cluster, CouchDB, or Spanner* that handle this for you.

<br>

<br>

## Replication Process

1. A write operation occurs on **any master node**.

2. The update is **asynchronously** transmitted to all other master nodes.

3. Each master applies the update to maintain consistency.

4. If two masters modify the same data simultaneously, a **conflict resolution mechanism** is needed.

<br>

<br>

---

## TL;DR

Multi-Master Replication turns your database into a café with multiple working cashiers:

no single point of failure, smoother flow, and faster service —

but it requires coordination to make sure all the *“orders”* match up.

<br>

So when to use it?

👉 Choose MMR if you need global availability, multi-region writes, and continuous uptime.

👉 Stick with SMR if your app is smaller and consistency matters more than uptime.

> In short: MMR keeps your data shop open, even when one counter goes down.

`,
    image: smrMmrImage,
    tags: ["Database"]
  },
  {
    id: 2,
    title: "Load Balancers: The Ticket Machine for Your Website Traffic",
    date: "29 Oct 2024",
    description: "Distribute traffic efficiently, from L4 to L7",
    content: ` Imagine all the people visiting your website are like customers walking into a bank.

Now, if the bank just says, *“Hey everyone, line up over here!”* what happens?
Everyone crowds into one poor teller’s line, while the other tellers sit back sipping coffee. That’s exactly what happens when all traffic goes to a single server—it gets overloaded while others do nothing.

This is why banks have **a ticket machine**.
You grab a ticket, and the machine assigns you to whichever teller is free. No chaos, no unfair workload. Customers are happy, and tellers don’t burn out.

<br>

In the world of IT, this magical ticket machine is the **Load Balancer**.

* \`Customers\` = user requests

* \`Tellers\` = servers

* \`Ticket machine\` = load balancer

<br>

But here’s the fun part:

When the bank suddenly gets flooded with customers, the manager can secretly bring in a few more tellers. Customers don’t even notice—they just keep taking tickets and getting served.

That’s exactly how scaling out works in modern systems. Add more servers, let the load balancer distribute the work, and everyone’s happy: customers, servers, and the system administrators. 🎉

<br>

<br>

---

# L4 vs. L7 Load Balancers: The Big Picture

Before we dive into comparing L4 and L7 load balancers, let’s talk about **the OSI (Open Systems Interconnection) Model**.

<img src="/img/osi_layer.png" alt="OsiLayer" width="100%" />

It sounds intimidating, but really, it’s just a fancy way of saying: *“Here’s the seven-step recipe for how data travels across the internet.”*

<br>

Think of it like a package delivery service:

- Which country it’s coming from (\`Layer 1–2: Physical/Data Link\`)

- Which city or neighborhood it’s heading to (\`Layer 3: Network\`)

- Which apartment door to knock on (\`Layer 4: Transport\`)

- And finally, opening the door to check who the package is really for (\`Layer 7: Application\`)

Step by step, the package makes its way safely to the right person.

<br>

Now, here’s where load balancers come in. They can work at **Layer 4 or Layer 7**:

- An **L4 switch** is like a courier who only looks at the address and apartment number—fast, but doesn’t care what’s inside the box.

- An **L7 switch** is like a courier who actually opens the box to see if it’s pizza, fried chicken, or a love letter before deciding where to deliver it.

So, **L4 is quick and simple**, while **L7 is smarter and more precise**—but might take a little longer.


<br>

<br>

---

## Layer 4 (L4) Load Balancer: The Courier Who Only Looks at the Address

An **L4 Load Balancer** operates at the **transport layer**, making forwarding decisions based on IP addresses and port numbers without inspecting the actual content of the network packets. This approach is more efficient as it does not require deep packet inspection.

They don’t care what’s inside the box at all.

Instead, they just say:

*“Oh, this package is going to \`192.168.0.10\` (= IP address) + \`:443\` (= Port number).”* → \`Delivered!\`

Since they never open the box (no deep inspection), everything goes much faster and more efficiently.

<br>

<br>

## 🛠️ Key Functions of L4 Load Balancers

**1. Traffic Distribution Algorithms**
  - **Round Robin**: Distributes packages sequentially.
  - **Least Connection**: Chooses the least busy server.
  - **Ratio-based**: Some servers get more, some get less—based on weight.
  - **Fastest Response Time**: Sends traffic to the server that replies the quickest.

<br>

**2. Source/Destination IP NAT (Network Address Translation)**
  - The courier can relabel the package with a different address.
  - This trick also helps defend against DDoS attacks (like preventing a delivery riot).

<br>

**3. TCP Connection Management**
  - Manages the classic **3-way handshake**: between client and server.
    - *“Knock knock.” → “Who’s there?” → “Okay, come in.”*
  - Tracks active connections and cleans up unused ones after a timeout.

<br>

**4. SSL Offloading**
  - The courier decrypts the package before passing it on.
  - The server then receives it as plain text, saving effort and working faster.

<br>

**5. Health Checks**
  - Keeps checking if a server is “alive.”
  - If one server is down, no packages go there.

<br>

**6. Sticky Sessions**
  - Ensures clients consistently connect to the same backend server when necessary.

<br>

<br>

---

## Layer 7 (L7) Load Balancer: The Courier Who Opens the Box

If L4 was the courier who only looks at the address and apartment number, L7 is the more curious type. This courier actually opens the package and checks what’s inside before deciding where to send it.

<br>

In networking terms, an L7 load balancer operates at the application layer. Instead of just looking at IP and port, it inspects HTTP headers, URLs, cookies, and even request payloads. That means it can make smarter, content-based decisions.

<br>

<br>

### 🛠️ How L7 Load Balancers Work

**1. Content Inspection**
  - Checks the label, the note inside, or even peeks into the box (= HTTP headers, cookies, payload).
  - Example: *“Oh, this request is for \`/images\`, send it to the image server. This one’s for \`/api\`, send it to the API server.”*

<br>

**2. User Awareness**
  - Can tell if the client is mobile or desktop, and route accordingly.
  - Example: *“This package is for Android users, forward to the mobile-optimized service!”*

<br>

**3. Path-based Routing**
  - Different URLs = different backend servers.
  - \`/login\` → Authentication server, \`/products\` → Catalog server, \`/checkout\` → Payment server.
  
<br>

<br>

### L4 vs. L7: Which Courier Do You Need?
**L4 (Address-only courier):**
  - Fast, efficient, doesn’t waste time opening boxes. Perfect if you don’t care about what’s inside.

<br>

**L7 (Curious courier):**
  - Slower, because opening boxes takes time, but way more flexible. Great for content-based routing and advanced strategies.

<br>

> 👉 If you don’t need deep inspection, L4 saves resources.

> 👉 If you need smarter decisions based on content, L7 is the way to go.

<br>

<br>

---

## Load Balancing in Real Systems: Kubernetes & Kafka

Think of load balancers in a real system as **the couriers who decide where and how to deliver packages.**

They determine which counter, which route, and which server should get the traffic—just like a courier managing parcels.

<br>

### Load Balancing in Kubernetes

Kubernetes provides service types to manage traffic within a cluster.

It’s like setting rules for how packages should be delivered inside a company.

<br>

1. **ClusterIP**
  - Accessible only within the cluster.
  - Like a *“company-internal delivery desk”* that external customers cannot use.

<br>

2. **NodePort**
  - Exposes the service on the same port across all nodes.
  - Like having *“delivery windows at all company entrances”* so anyone can drop off or pick up.

<br>

3. **LoadBalancer**
  - Integrates with external load balancers (AWS ELB, GCP Load Balancer, etc.).
  - Like *distributing incoming traffic (packages) evenly across multiple servers (couriers).*

<br>

In short, Kubernetes defines rules for how L4/L7 couriers deliver the packages inside the cluster.

<br>

### Kafka and Partition Rebalancing

Kafka, a distributed messaging system, also uses load balancing to deliver messages (packages) evenly across consumers (couriers).

- When a new consumer joins or leaves, Kafka performs partition rebalancing.

- Think of it like: *“A new courier joins, let’s redistribute the packages fairly so no one is overloaded.”*

- This ensures all consumers get a balanced workload.

<br>

<br>

---

# Conclusion

### L4 Load Balancer
- Operates at the transport layer, forwarding traffic based solely on IP addresses and port numbers. It is fast, efficient, and suitable for handling high-volume traffic, where simple distribution is sufficient.

<br>

### L7 Load Balancer
- Operates at the application layer, inspecting HTTP headers, URLs, cookies, and request payloads. It enables intelligent routing, content-based decisions, and customized responses, making it ideal for complex traffic management scenarios.

<br>

### Practical Applications (Kubernetes & Kafka)
Load balancers are critical in modern distributed systems. In Kubernetes, they distribute incoming requests across services efficiently, while in Kafka, partition rebalancing ensures even distribution of messages among consumers. Proper use of L4 and L7 load balancing is essential for **scalability, reliability, and performance optimization.**

<br>

> **Key takeaway:** Choose L4 for high-speed, simple traffic distribution, and L7 when content-aware routing or advanced traffic management is required.

<br>

<br>
`,
    image: loadBalancerImage,
    tags: ["Database"]
  }
]; 