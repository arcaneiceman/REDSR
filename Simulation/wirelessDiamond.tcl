#Copyright (c) 1997 Regents of the University of California.
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions
# are met:
# 1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
# 3. All advertising materials mentioning features or use of this software
#    must display the following acknowledgement:
#      This product includes software developed by the Computer Systems
#      Engineering Group at Lawrence Berkeley Laboratory.
# 4. Neither the name of the University nor of the Laboratory may be used
#    to endorse or promote products derived from this software without
#    specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
# OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
# HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
# OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
# SUCH DAMAGE.
#
# $Header: /cvsroot/nsnam/ns-2/tcl/ex/wireless-mitf.tcl,v 1.2 2000/08/30 00:10:45 haoboy Exp $
#
# Simple demo script for the new APIs to support multi-interface for 
# wireless node.
#
# Define options
# Please note: 
# 1. you can still specify "channelType" in node-config right now:
# set val(chan)           Channel/WirelessChannel
# $ns_ node-config ...
#		 -channelType $val(chan)
#                  ...
# But we recommend you to use node-config in the way shown in this script
# for your future simulations.  
# 
# 2. Because the ad-hoc routing agents do not support multiple interfaces
#    currently, this script can't generate anything interesting if you config
#    the interfaces of node 1 and 2 on different channels
#   
#     --Xuan Chen, USC/ISI, July 21, 2000
#
set val(chan)           Channel/WirelessChannel    ;#Channel Type
set val(prop)           Propagation/TwoRayGround   ;# radio-propagation model
set val(netif)          Phy/WirelessPhy            ;# network interface type
set val(mac)            Mac/802_11                 ;# MAC type
set val(ifq)            CMUPriQueue    	   	   ;# interface queue type
set val(ll)             LL                         ;# link layer type
set val(ant)            Antenna/OmniAntenna        ;# antenna model
set val(ifqlen)         50                         ;# max packet in ifq
set val(nn)             4                          ;# number of mobilenodes
#set val(rp)             DSDV                       ;# routing protocol
set val(rp)             DSR                       ;# routing protocol
set val(x)		250
set val(y)		250

# Initialize Global Variables
set ns_		[new Simulator]
set tracefd     [open wireless_diamond.tr w]
$ns_ trace-all $tracefd

set namtrace [open wireless_diamond.nam w]
$ns_ namtrace-all-wireless $namtrace $val(x) $val(y)

# set up topography object
set topo       [new Topography]

$topo load_flatgrid $val(x) $val(y)

# Create God
create-god $val(nn)

# New API to config node: 
# 1. Create channel (or multiple-channels);
# 2. Specify channel in node-config (instead of channelType);
# 3. Create nodes for simulations.

# Create channel #1 
set chan_1_ [new $val(chan)]

#Setting Ranges Info

Antenna/OmniAntenna set X_ 0
Antenna/OmniAntenna set Y_ 0
Antenna/OmniAntenna set Z_ 1.5
Antenna/OmniAntenna set Gt_ 1.0
Antenna/OmniAntenna set Gr_ 1.0

# Initialize the SharedMedia interface with parameters to make
# it work like the 914MHz Lucent WaveLAN DSSS radio interface
$val(netif) set CPThresh_ 10.0
$val(netif) set CSThresh_ 5.8442e-09  ;#sensing range of 125m
$val(netif) set RXThresh_ 5.8442e-09  ;#communication range of 125m
$val(netif) set Rb_ 2*1e6
$val(netif) set Pt_ 0.2818
$val(netif) set freq_ 914e+6 
$val(netif) set L_ 1.0


# configure node, please note the change below.
$ns_ node-config -adhocRouting $val(rp) \
		-llType $val(ll) \
		-macType $val(mac) \
		-ifqType $val(ifq) \
		-ifqLen $val(ifqlen) \
		-antType $val(ant) \
		-propType $val(prop) \
		-phyType $val(netif) \
		-topoInstance $topo \
		-agentTrace ON \
		-routerTrace ON \
		-macTrace ON \
		-movementTrace OFF \
		-channel $chan_1_ 

#Node A Config set
set node_(0) [$ns_ node]

#Node B Config set
set node_(1) [$ns_ node]


# Initialize the SharedMedia interface with parameters to make
# it work like the 914MHz Lucent WaveLAN DSSS radio interface
$val(netif) set CPThresh_ 10.0
$val(netif) set CSThresh_ 2.81838e-09  ;#sensing range of 150m
$val(netif) set RXThresh_ 2.81838e-09  ;#communication range of 150m
$val(netif) set Rb_ 2*1e6
$val(netif) set Pt_ 0.2818
$val(netif) set freq_ 914e+6 
$val(netif) set L_ 1.0

$ns_ node-config -adhocRouting $val(rp) \
		-llType $val(ll) \
		-macType $val(mac) \
		-ifqType $val(ifq) \
		-ifqLen $val(ifqlen) \
		-antType $val(ant) \
		-propType $val(prop) \
		-phyType $val(netif) \
		-topoInstance $topo \
		-agentTrace ON \
		-routerTrace ON \
		-macTrace ON \
		-movementTrace OFF \
		-channel $chan_1_ 


#Node C Config set
set node_(2) [$ns_ node]

#Node D Config set
set node_(3) [$ns_ node]

$node_(0) random-motion 0
$node_(1) random-motion 0
$node_(2) random-motion 0
$node_(3) random-motion 0



#
# Provide initial (X,Y, for now Z=0) co-ordinates for mobilenodes
#

#Node A
$node_(0) set X_ 25.0
$node_(0) set Y_ 75.0
$node_(0) set Z_ 0.0

#Node B
$node_(1) set X_ 225.0
$node_(1) set Y_ 75.0
$node_(1) set Z_ 0.0

#Node C (Evil)
$node_(2) set X_ 125.0
$node_(2) set Y_ 125.0
$node_(2) set Z_ 0.0
$ns_ at 0.0 "[$node_(2) set ragent_] malicious"

#Node D (Good)
$node_(3) set X_ 125.0
$node_(3) set Y_ 25.0
$node_(3) set Z_ 0.0
#

#Mac ID 
$ns_ at 0.0 "[$node_(0) set ragent_] mac-addr 0"
$ns_ at 0.0 "[$node_(1) set ragent_] mac-addr 1"
$ns_ at 0.0 "[$node_(2) set ragent_] mac-addr 2"
$ns_ at 0.0 "[$node_(3) set ragent_] mac-addr 3"

#Schedule Building trust
$ns_ at 3.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 6.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 9.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 12.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 15.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 18.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 21.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 24.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 27.0 "[$node_(0) set ragent_] buildtrust"
$ns_ at 30.0 "[$node_(0) set ragent_] buildtrust"


$ns_ at .0 "[$node_(0) set ragent_] mac-addr 0"
$ns_ at 0.0 "[$node_(1) set ragent_] mac-addr 1"
$ns_ at 0.0 "[$node_(2) set ragent_] mac-addr 2"
$ns_ at 0.0 "[$node_(3) set ragent_] mac-addr 3"


for {set i 0} {$i < $val(nn)} {incr i} {
	$ns_ initial_node_pos $node_($i) 5
}

# Now produce some simple node movements
# Node_(1) starts to move towards node_(0)
#
#$ns_ at 3.0 "$node_(1) setdest 50.0 40.0 25.0"
#$ns_ at 3.0 "$node_(0) setdest 48.0 38.0 5.0"

# Node_(1) then starts to move away from node_(0)
#$ns_ at 20.0 "$node_(1) setdest 490.0 480.0 30.0" 

# Setup traffic flow between nodes
# TCP connections between node_(0) and node_(1)


set tcp [new Agent/TCP]
$tcp set class_ 2
set sink [new Agent/TCPSink]
$ns_ attach-agent $node_(0) $tcp
$ns_ attach-agent $node_(1) $sink
$ns_ connect $tcp $sink
set ftp [new Application/FTP]
$ftp attach-agent $tcp
$ns_ at 3.0 "$ftp start" 


#
# Tell nodes when the simulation ends
#
for {set i 0} {$i < $val(nn) } {incr i} {
    $ns_ at 30.0 "$node_($i) reset";
}
$ns_ at 30.0 "stop"
$ns_ at 30.01 "puts \"NS EXITING...\" ; $ns_ halt"
proc stop {} {
    global ns_ tracefd
    $ns_ flush-trace
    close $tracefd
}

puts "Starting Simulation..."
$ns_ run
