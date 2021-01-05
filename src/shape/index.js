import registerAnchor from './anchor'
import registerControlPoint from './controlPoint'
import registerNode from './node'
import registerFlowNode from './flowNode'
import registerEdge from './edge'
import registerSubProcess from './subProcess'

export default function(G6,devices){
  registerAnchor(G6);
  registerControlPoint(G6);
  registerNode(G6);
  registerFlowNode(G6,devices);
  registerEdge(G6);
  registerSubProcess(G6)
}
